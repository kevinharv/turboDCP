package com.kevharv.tdpc.packages;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PostUpdate;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "packages")
public class MediaPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String jobName;
    private String contentName;
    private int containerRatio;
    private int contentRatio;
    private ContentType contentType;
    private int frameRate;
    private long mediaID;
    private PackageStatus packageStatus;
    private Date created;
    private Date lastUpdated;

    public MediaPackage() {
    }

    public MediaPackage(String jobName, String contentName, int containerRatio, int contentRatio,
            ContentType contentType, int frameRate, long mediaID) {
        this.jobName = jobName;
        this.contentName = contentName;
        this.containerRatio = containerRatio;
        this.contentRatio = contentRatio;
        this.contentType = contentType;
        this.frameRate = frameRate;
        this.mediaID = mediaID;
        this.packageStatus = PackageStatus.CREATED;
    }

    public PackageStatus getPackageStatus() {
        return packageStatus;
    }

    public void setPackageStatus(PackageStatus packageStatus) {
        this.packageStatus = packageStatus;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getContentName() {
        return contentName;
    }

    public void setContentName(String contentName) {
        this.contentName = contentName;
    }

    public int getContainerRatio() {
        return containerRatio;
    }

    public void setContainerRatio(int containerRatio) {
        this.containerRatio = containerRatio;
    }

    public int getContentRatio() {
        return contentRatio;
    }

    public void setContentRatio(int contentRatio) {
        this.contentRatio = contentRatio;
    }

    public ContentType getContentType() {
        return contentType;
    }

    public void setContentType(ContentType contentType) {
        this.contentType = contentType;
    }

    public int getFrameRate() {
        return frameRate;
    }

    public void setFrameRate(int frameRate) {
        this.frameRate = frameRate;
    }

    public long getMediaID() {
        return mediaID;
    }

    public void setMediaID(long mediaID) {
        this.mediaID = mediaID;
    }

    public Date getCreated() {
        return this.created;
    }

    public Date getLastUpdated() {
        return this.lastUpdated;
    }

    @PrePersist
    protected void onCreate() {
        this.created = new Date();
    }

    @PostUpdate
    protected void onUpdate() {
        this.lastUpdated = new Date();
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (id ^ (id >>> 32));
        result = prime * result + ((jobName == null) ? 0 : jobName.hashCode());
        result = prime * result + ((contentName == null) ? 0 : contentName.hashCode());
        result = prime * result + containerRatio;
        result = prime * result + contentRatio;
        result = prime * result + ((contentType == null) ? 0 : contentType.hashCode());
        result = prime * result + frameRate;
        result = prime * result + (int) (mediaID ^ (mediaID >>> 32));
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        MediaPackage other = (MediaPackage) obj;
        if (id != other.id)
            return false;
        if (jobName == null) {
            if (other.jobName != null)
                return false;
        } else if (!jobName.equals(other.jobName))
            return false;
        if (contentName == null) {
            if (other.contentName != null)
                return false;
        } else if (!contentName.equals(other.contentName))
            return false;
        if (containerRatio != other.containerRatio)
            return false;
        if (contentRatio != other.contentRatio)
            return false;
        if (contentType != other.contentType)
            return false;
        if (frameRate != other.frameRate)
            return false;
        if (mediaID != other.mediaID)
            return false;
        return true;
    }

}
