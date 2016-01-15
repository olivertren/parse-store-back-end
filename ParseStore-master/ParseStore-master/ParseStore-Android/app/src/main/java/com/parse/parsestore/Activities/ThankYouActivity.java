package com.parse.parsestore.Activities;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import com.parse.parsestore.R;

/**
 * Created by Oliver on 1/13/2016.
 */
public class ThankYouActivity extends AppCompatActivity{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_thankyou);

        TextView thankYou = (TextView) findViewById(R.id.textView2);
        thankYou.setText("Thank You!");
    }
}
