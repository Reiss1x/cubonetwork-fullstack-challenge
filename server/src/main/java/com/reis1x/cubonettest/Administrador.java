package com.reis1x.cubonettest;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Administrador {
    @Autowired
    private ParticipantRepo repo;

    public void addParticipant(Participant p){
        repo.addParticipant(p);
    }

    public List<Participant> getAll(){
        return repo.getAll();
    }
    public String resetAll(){
        return repo.resetAll();
    }
}
