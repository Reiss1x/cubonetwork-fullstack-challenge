package com.reis1x.cubonettest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ParticipantController {

    @Autowired
    private Administrador admin;

    @PostMapping("/participant/submit")
    public String addParticipant(@RequestBody Participant participant){
        admin.addParticipant(participant);
        return "Participant data added.";
    }
                  
    @GetMapping("/participant/getAll")
    public List<Participant> getAll(){
        return admin.getAll();
    }

    @PostMapping("/participant/resetAll")
    public String resetAllParticipants(){
        return admin.resetAll();
    }
    
}
