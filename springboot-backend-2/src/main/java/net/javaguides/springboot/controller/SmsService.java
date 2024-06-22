package net.javaguides.springboot.controller;



import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Value("${twilio.account.sid}")
    private String twilioAccountSid;

    @Value("${twilio.auth.token}")
    private String twilioAuthToken;

    @Value("${twilio.phone.number}")
    private String twilioPhoneNumber;

    public void sendSms(String to, String body) {
        try {
            Twilio.init(twilioAccountSid, twilioAuthToken);

            Message message = Message.creator(
                    new PhoneNumber(to),
                    new PhoneNumber(twilioPhoneNumber),
                    body
            ).create();

            System.out.println("Message SID: " + message.getSid());
            // Log success

        } catch (Exception e) {
            e.printStackTrace();
            // Log the exception details
        }
    }
}
