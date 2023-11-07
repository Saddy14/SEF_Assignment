import java.util.ArrayList;

public class OwnerAgent extends User{
    
    // PropertyInfo property = new PropertyInfo();
    private ArrayList<PropertyInfo> myProperties = new ArrayList<>();

    public ArrayList<PropertyInfo> getMyProperties() {
        return myProperties;
    }

    // public void setMyProperties(ArrayList<PropertyInfo> myProperties) {
    //     this.myProperties = myProperties;
    // }

    void addProperty() {

        myProperties.add(new PropertyInfo());
    }

    // owner.removeProperty();
    // owner.updateProperty();
    // owner.viewProperties();
    
    

    
    

}
