package com.kevharv.tdpc;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.kevharv.tdpc.media.Media;
import com.kevharv.tdpc.media.MediaRepository;
import com.kevharv.tdpc.packages.ContentType;
import com.kevharv.tdpc.packages.MediaPackage;
import com.kevharv.tdpc.packages.PackageRepository;
@SpringBootTest
class TdpcApplicationTests {

	@Autowired
	MediaRepository mediaRepository;

	@Autowired
	PackageRepository packageRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void testMediaCRUD() {
		Media media = new Media("Test Media Entry", "This is a test media entry create for unit tests. It should not appear in production.");
		Long createdMediaID = mediaRepository.save(media).getId();
		
		Media lookupMedia = mediaRepository.findById(createdMediaID).orElseThrow(() -> new Error("Failed to find test media."));
		lookupMedia.setDescription("Updated description - this should not appear in production.");
		mediaRepository.save(lookupMedia);

		mediaRepository.deleteById(createdMediaID);

		assertFalse(lookupMedia.equals(media));
	}

	@Test
	void testPackageCRUD() {
		MediaPackage pack = new MediaPackage("Test Job", "Test Content", 185, 185, ContentType.FTR, 185, 185);
		assertNotNull(pack);
	}

}
