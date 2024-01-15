import java.util.ArrayList;

public class OwnerAgent extends User{
    

    OwnerAgent() {

        super.setUserType("Owner/Agent");
    }






    // A List that Contains All PropertyInfo A Owner Has Property 
    private ArrayList<PropertyInfo> myProperties = new ArrayList<>();

    public ArrayList<PropertyInfo> getMyProperties() {
        return myProperties;
    }

    void addProperty() {
        
        myProperties.add(new PropertyInfo());
    }
    
    // public void setMyProperties(ArrayList<PropertyInfo> myProperties) {
    //     this.myProperties = myProperties;
    // }
    // owner.removeProperty();
    // owner.updateProperty();
    // owner.viewProperties();
    
    

    
    

}
