package com.kevharv.tdpc.packages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kevharv.tdpc.exceptions.NotFoundException;

@RestController
public class PackageController {

    @Autowired
    private final PackageRepository packageRepository;

    public PackageController(PackageRepository packageRepository) {
        this.packageRepository = packageRepository;
    }

    @GetMapping("/packages")
    public Iterable<MediaPackage> getPackages() {
        return packageRepository.findAll();
    }

    @GetMapping("/packages/{id}")
    public MediaPackage getPackageByID(@PathVariable Long id) {
        return packageRepository.findById(id).orElseThrow(() -> new NotFoundException(id, "package"));
    }

    @PostMapping("/packages")
    public MediaPackage createPackage(@RequestBody MediaPackage pack) {
        return packageRepository.save(pack);
    }

    @DeleteMapping("/packages/{id}")
    public ResponseEntity<String> deleteMediaByID(@PathVariable Long id) {
        packageRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
