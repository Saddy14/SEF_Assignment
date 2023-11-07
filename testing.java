public class testing {
    public static void main(String[] args) {
    
        // Tenant tenant1 = new Tenant();
        int x = 0;
        // tenant1.setFirstName("Chicken");
        // tenant1.setAge(40);
        // System.out.println(tenant1);

        OwnerAgent owner = new OwnerAgent();
        
        owner.addProperty();
        owner.addProperty();
        owner.addProperty();


        // owner.
        // System.out.println(owner.getMyProperties());

        // p1
        // owner.getMyProperties().get(0).setPropertyName("Hello");
        while(x < owner.getMyProperties().size()) {

            System.out.println(owner.getMyProperties().get(x).getPropertyId() + "\n");
            x++;
        }

        // owner.removeProperty(p2);
        

    }
}
