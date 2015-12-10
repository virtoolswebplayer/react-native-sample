package com.test1;

import android.app.Activity;
import android.os.Bundle;
import android.view.KeyEvent;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.smixx.reactnativeicons.IconFont; // <--- import this if you want to specify which fonts to load
import com.smixx.reactnativeicons.ReactNativeIcons;  // <--- import

// import java.util.Arrays; // <--- import this if you want to specify which fonts to load
// codePush 1: 引用codePush
import com.microsoft.codepush.react.CodePush;

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

    private ReactInstanceManager mReactInstanceManager;
    private ReactRootView mReactRootView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);

        // codePush 2: 初始化codePush 此处填入在codepush官网申请的 'develop key'
        CodePush codePush = new CodePush("0Zw0wnf3haZFAOlyFQBvt39lglmDEyVoijw4g", this);

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                // codePush 3: 将 .setBundleAssetName("index.android.bundle") 替换为 .setJSBundleFile(codePush.getBundleUrl("index.android.bundle"))
                .setJSBundleFile(codePush.getBundleUrl("index.android.bundle"))
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                // codePush 4: 把CodePush暴露给javascript
                .addPackage(codePush.getReactPackage())
                .addPackage(new ReactNativeIcons())              // <------ add here
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, "WealthApp", null);

        setContentView(mReactRootView);
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    @Override
    public void onBackPressed() {
      if (mReactInstanceManager != null) {
        mReactInstanceManager.onBackPressed();
      } else {
        super.onBackPressed();
      }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
      super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onResume(this, this);
        }
    }
}
