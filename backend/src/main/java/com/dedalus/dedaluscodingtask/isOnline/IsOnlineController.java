package com.dedalus.dedaluscodingtask.isOnline;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/is-online")
public class IsOnlineController {
    @GetMapping
	public Boolean getAnalyzeText() {
        
		return true;
	}
}
