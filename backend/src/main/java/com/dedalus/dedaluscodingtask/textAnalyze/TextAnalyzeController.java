package com.dedalus.dedaluscodingtask.textAnalyze;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/analyze")
public class TextAnalyzeController {
    private final TextAnalyzeService textAnalyzeService;

    @Autowired
    public TextAnalyzeController(TextAnalyzeService textAnalyzeService) {
        this.textAnalyzeService = textAnalyzeService;
    }

    @GetMapping
	public List<TextAnalyze> getAnalyzeText(@RequestParam("text") String text, @RequestParam("mode") String mode) {
        
		return this.textAnalyzeService.getAnalyzeText(text, mode);
	}
}
