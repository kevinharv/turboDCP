package com.kevharv.tdpc.media;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import com.kevharv.tdpc.exceptions.NotFoundException;

@RestController
public class MediaController {

    @Value("tdcp.file.basepath")
    private String baseFilePath;
    private final Path fileStorageLocation = Paths.get("/tmp");

    @Autowired
    private final MediaRepository mediaRepository;

    public MediaController(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }

    @GetMapping("/media")
    public Iterable<Media> getMedia() {
        return mediaRepository.findAll();
    }

    @GetMapping("/media/{id}")
    public Media getMediaByID(@PathVariable Long id) {
        return mediaRepository.findById(id).orElseThrow(() -> new NotFoundException(id, "media"));
    }

    @PostMapping("/media")
    public Media createMedia(@RequestBody Media media) {
        return mediaRepository.save(media);
    }

    @PostMapping("/media/{id}/upload")
    public ResponseEntity<String> uploadMedia(@PathVariable Long id, @RequestParam("file") MultipartFile file) {

        Media media = mediaRepository.findById(id).orElseThrow(() -> new NotFoundException(id, "media"));

        if (file.getSize() == 0) {
            return ResponseEntity.badRequest().body("Empty file submitted.");
        }

        if (file == null || !file.getContentType().equals("video/*")) {
            return ResponseEntity.badRequest().body("Invalid file type. Only video files permitted.");
        }

        if (file.getSize() > 1_000_000_000) {
            // Reject >1GB
            return ResponseEntity.badRequest().body("File too large. Please upload files smaller than 1GB.");
        }

        try {
            file.transferTo(new java.io.File(baseFilePath + "/" + Long.toString(id)));
            media.setFilepath(baseFilePath + "/" + Long.toString(id));
            mediaRepository.save(media);
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Unable to save file.");
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping("/media/{id}/download")
    public ResponseEntity<Resource> downloadMediaByID(@PathVariable Long id) {
        try {
            Path filePath = this.fileStorageLocation.resolve(Long.toString(id)).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists() || resource.isReadable()) {
                return ResponseEntity.ok().body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/media/{id}")
    public Media updateMedia(@PathVariable Long id, @RequestBody Media updatedMedia) {
        return mediaRepository.findById(id)
            .map(media -> {
                media.setName(updatedMedia.getName());
                media.setDescription(updatedMedia.getDescription());
                media.setArchived(updatedMedia.isArchived());
                return mediaRepository.save(media);
            })
            .orElseThrow(() -> new NotFoundException(id, "media"));
    }

    @DeleteMapping("/media/{id}")
    public ResponseEntity<String> deleteMediaByID(@PathVariable Long id) {
        mediaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
