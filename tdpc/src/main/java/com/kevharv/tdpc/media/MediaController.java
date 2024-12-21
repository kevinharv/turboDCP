package com.kevharv.tdpc.media;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MediaController {
    
    @GetMapping("/media")
    public List<Media> getMedia() {
        List<Media> media = new ArrayList<>();
        media.add(new Media("Movie 1", "Description of the first movie in the list."));
        media.add(new Media("Movie 2", "Description of the second movie in the list."));
        media.add(new Media("Movie 3", "Description of the third movie in the list."));
        media.add(new Media("Movie 4", "Description of the fourth movie in the list."));
        media.add(new Media("Movie 5", "Description of the fifth movie in the list."));
        media.add(new Media("Movie 6", "Description of the sixth movie in the list."));
        return media;
    }
}
