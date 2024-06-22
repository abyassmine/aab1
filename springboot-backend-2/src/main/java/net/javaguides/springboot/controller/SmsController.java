package net.javaguides.springboot.controller;

import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsController {

    @Value("${releans.api.key}")
    private String apiKey;

    public void sendSms(String sender, String mobile, String content) throws Exception {
        OkHttpClient client = new OkHttpClient().newBuilder().build();
        MediaType mediaType = MediaType.parse("text/plain");
        RequestBody body = RequestBody.create(mediaType, "sender=" + sender + "&mobile=" + mobile + "&content=" + content);
        Request request = new Request.Builder()
                .url("https://api.releans.com/v2/message")
                .method("POST", body)
                .addHeader("Authorization", "Bearer " + apiKey)
                .build();
        Response response = client.newCall(request).execute();
        if (!response.isSuccessful()) {
            throw new Exception("Failed to send SMS: " + response.code() + " - " + response.message());
        }
        // Handle successful response if needed
    }
}
