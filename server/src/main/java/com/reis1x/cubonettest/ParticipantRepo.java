package com.reis1x.cubonettest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;
@Repository
public class ParticipantRepo {
    private List<Participant> participants = new ArrayList<Participant>();

    

    public ParticipantRepo() {
        addDefaultParticipants();
    }

    public void addParticipant(Participant p){
        participants.add(p);
    }

    public List<Participant> getAll(){
        return participants;
    }

    public String resetAll(){
        participants.clear();
        addDefaultParticipants();
        return "Participants cleared.";
    }

    public void addDefaultParticipants(){
        participants.add(new Participant("Carlos", "Moura", 5));
        participants.add(new Participant("Fernanda", "Oliveira", 15));
        participants.add(new Participant("Hugo", "Silva", 20));
        participants.add(new Participant("Eliza", "Souza", 20));
        participants.add(new Participant("Anderson", "Santos", 40));
    }
}
