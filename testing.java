public class testing {
    public static void main(String[] args) {
    
        // Tenant tenant1 = new Tenant();

        // tenant1.setFirstName("Chicken");
        // tenant1.setAge(40);
        // System.out.println(tenant1);

        OwnerAgent owner = new OwnerAgent();
        
        owner.addProperty();
        // owner.addProperty();
        // owner.addProperty();


        // owner.
        // System.out.println(owner.getMyProperties());

        // p1
        owner.getMyProperties().get(0).setPropertyName("Hello");
        System.out.println(owner.getMyProperties().toString());

        // owner.removeProperty(p2);
        

    }
}
