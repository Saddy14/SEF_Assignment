public class PropertyInfo {
    
    private int propertyId;
    private static int propertyIdCounter;
   
    private String propertyName;
    private String propertyAddress;
    private String propertyType;
    private double propertyArea;
    private double propertyRent;
    private int utilityDeposit;
    private int securityDeposit;
    private int keyDeposit;
    private int numberOfRoom;
    private int numberOfBathroom;
    private boolean isFurnished;
    private boolean hasParking;
    private boolean hasPool;
    private boolean hasFireplace;   
    private boolean isRentable;
    // rules pdf

    PropertyInfo () {

        this.propertyId = propertyIdCounter;
        propertyIdCounter++;

    }
    
    public String getPropertyName() {
        return propertyName;
    }
    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }
    public String getPropertyAddress() {
        return propertyAddress;
    }
    public void setPropertyAddress(String propertyAddress) {
        this.propertyAddress = propertyAddress;
    }
    public String getPropertyType() {
        return propertyType;
    }
    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }
    public double getPropertyArea() {
        return propertyArea;
    }
    public void setPropertyArea(double propertyArea) {
        this.propertyArea = propertyArea;
    }
    public double getPropertyRent() {
        return propertyRent;
    }
    public void setPropertyRent(double propertyRent) {
        this.propertyRent = propertyRent;
    }
    public int getUtilityDeposit() {
        return utilityDeposit;
    }
    public void setUtilityDeposit(int utilityDeposit) {
        this.utilityDeposit = utilityDeposit;
    }
    public int getSecurityDeposit() {
        return securityDeposit;
    }
    public void setSecurityDeposit(int securityDeposit) {
        this.securityDeposit = securityDeposit;
    }
    public int getKeyDeposit() {
        return keyDeposit;
    }
    public void setKeyDeposit(int keyDeposit) {
        this.keyDeposit = keyDeposit;
    }
    public int getNumberOfRoom() {
        return numberOfRoom;
    }
    public void setNumberOfRoom(int numberOfRoom) {
        this.numberOfRoom = numberOfRoom;
    }
    public int getNumberOfBathroom() {
        return numberOfBathroom;
    }
    public void setNumberOfBathroom(int numberOfBathroom) {
        this.numberOfBathroom = numberOfBathroom;
    }
    public boolean isFurnished() {
        return isFurnished;
    }
    public void setFurnished(boolean isFurnished) {
        this.isFurnished = isFurnished;
    }
    public boolean isHasParking() {
        return hasParking;
    }
    public void setHasParking(boolean hasParking) {
        this.hasParking = hasParking;
    }
    public boolean isHasPool() {
        return hasPool;
    }
    public void setHasPool(boolean hasPool) {
        this.hasPool = hasPool;
    }
    public boolean isHasFireplace() {
        return hasFireplace;
    }
    public void setHasFireplace(boolean hasFireplace) {
        this.hasFireplace = hasFireplace;
    }
    public boolean isRentable() {
        return isRentable;
    }
    public void setRentable(boolean isRentable) {
        this.isRentable = isRentable;
    }

    public int getPropertyId() {
        return propertyId;
    }
    public void setPropertyId(int propertyId) {
        this.propertyId = propertyId;
    }

    @Override
    public String toString() {
        return "PropertyInfo [propertyId=" + propertyId + ", propertyIdCounter=" + propertyIdCounter + ", propertyName="
                + propertyName + ", propertyAddress=" + propertyAddress + ", propertyType=" + propertyType
                + ", propertyArea=" + propertyArea + ", propertyRent=" + propertyRent + ", utilityDeposit="
                + utilityDeposit + ", securityDeposit=" + securityDeposit + ", keyDeposit=" + keyDeposit
                + ", numberOfRoom=" + numberOfRoom + ", numberOfBathroom=" + numberOfBathroom + ", isFurnished="
                + isFurnished + ", hasParking=" + hasParking + ", hasPool=" + hasPool + ", hasFireplace=" + hasFireplace
                + ", isRentable=" + isRentable + "]";
    }

   

    


    
}
