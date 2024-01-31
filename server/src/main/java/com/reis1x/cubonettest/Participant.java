package com.reis1x.cubonettest;


public class Participant {

    private String firstName;
    private String lastName;
    private int participation;

    public Participant(String firstName, String lastName, int participation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.participation = participation;
   
    }

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
    public int getParticipation() {
        return participation;
    }
    public void setParticipation(int participation) {
        this.participation = participation;
    }



    
}
