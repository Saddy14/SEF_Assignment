public abstract class User {

    private String userId;
    private String password;
    private String firstName, lastName;
    private String email;
    private int phone;          // 01xxxxxxx
    private int age;            // <= 100
    private String dateOfBirth; // DD/MM/YYYY
    private String citizenship; // Passport Holder of ... 
    private char gender;        // m or f
    private String userType;    // admin, agent/owner, tenant
   
    // User (String firstName, String lastName, String email, int age, String dateOfBirth, char gender, String userType  ) {

    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.email = email;
    //     this.age = age;
    //     this.dateOfBirth = dateOfBirth;
    //     this.gender = gender;
    // }
    
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        
        if (age <= 100)
        this.age = age;
        else
        System.out.println("Invalid Age, Must be Less than 100");
        System.exit(0);
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        
        if (gender == 'm' || gender == 'f')
        this.gender = gender;
        else
        System.out.println("Invalid Gender, Only m or f");
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }


    public String getUserId() {
        return userId;
    }


    public void setUserId(String userId) {
        this.userId = userId;
    }


    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getCitizenship() {
        return citizenship;
    }

    public void setCitizenship(String citizenship) {
        this.citizenship = citizenship;
    }

    // public void WelcomeMssg
    // public boolean loginVerify () {} 

    @Override
    public String toString() {
        return "User [userId=" + userId + ", password=" + password + ", firstName=" + firstName + ", lastName="
                + lastName + ", email=" + email + ", phone=" + phone + ", age=" + age + ", dateOfBirth=" + dateOfBirth
                + ", citizenship=" + citizenship + ", gender=" + gender + ", userType=" + userType + "]";
    }

}