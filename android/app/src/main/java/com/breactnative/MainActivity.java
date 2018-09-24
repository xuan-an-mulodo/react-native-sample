package com.breactnative;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.view.WindowManager;
import android.support.annotation.Nullable;

public class MainActivity extends ReactActivity {
    
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                WindowManager.LayoutParams.FLAG_SECURE);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "BReactNative";
    }
}
