package com.dedalus.dedaluscodingtask.textAnalyze;

public class TextAnalyze {
    private String letter;
    private Integer value;

    public TextAnalyze(
        String letter,
        Integer value
    ) {
        this.letter = letter;
        this.value = value;
    }

    public void setLetter(String letter) {
        this.letter = letter;
    }

    public String getLetter() {
        return this.letter;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public Integer getValue() {
        return this.value;
    }
}