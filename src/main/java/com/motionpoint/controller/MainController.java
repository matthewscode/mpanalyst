package com.motionpoint.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Matthew on 1/26/2017.
 */
@Controller
@RequestMapping
public class MainController {

    @RequestMapping("/")
    public String indexHome(){

        return "index.html";
    }

    @RequestMapping("/site-analysis/{pid}")
    public String okay(@PathVariable String pid){

        return "../analysis.html";
    }

}
