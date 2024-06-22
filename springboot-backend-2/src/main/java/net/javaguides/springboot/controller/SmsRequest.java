package net.javaguides.springboot.controller;

// SmsRequest.java
import java.util.List;

public class SmsRequest {
    private List<String> phoneNumbers;
    private List<String> messages;

    public SmsRequest() {
        // Default constructor
    }

    public SmsRequest(List<String> phoneNumbers, List<String> messages) {
        this.phoneNumbers = phoneNumbers;
        this.messages = messages;
    }

    public List<String> getPhoneNumbers() {
        return phoneNumbers;
    }

    public void setPhoneNumbers(List<String> phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
    }

    public List<String> getMessages() {
        return messages;
    }

    public void setMessages(List<String> messages) {
        this.messages = messages;
    }
}
