package com.dedalus.dedaluscodingtask.textAnalyze;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Component;

@Component
public class TextAnalyzeService {
    public List<TextAnalyze> getAnalyzeText(String text, String mode) {
        List<Character> vowels = List.of('a', 'e', 'i', 'o', 'u');
        List<Character> consonants = List.of('b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z');
        
        if (mode.equals("vowels")) {
            return this.countText(text, vowels);
        }

        if (mode.equals("consonants")) {
            return this.countText(text, consonants);
        }

        return new ArrayList<>();
    }

    private List<TextAnalyze> countText(String text, List<Character> letterMatchList) {
        List<TextAnalyze> result = new ArrayList<>();

        for(Integer i = 0; i < letterMatchList.size(); i++) {
            System.out.println(letterMatchList.get(i));

            result.add(
                new TextAnalyze(Character.toString(letterMatchList.get(i)), this.letterCounter(text, letterMatchList.get(i)))
            );
        }

        return result;
    }

    private Integer letterCounter(String text, Character targetLetter) {
        Integer counter = 0;

        for(Integer i = 0; i < text.length(); i++) {
            if (Character.toLowerCase(text.charAt(i)) == targetLetter) {
                counter++;
            }
        }

        return counter;
    } 
}
