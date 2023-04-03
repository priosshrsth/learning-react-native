## Installing and using splash screen
The first screen users view after clicking an application icon is known as a splash screen. Usually, it consists of a straightforward screen with your app’s branding in the middle that disappears when the app is ready to launch. This article will walk you through implementing a splash screen on React Native application.

https://blog.openreplay.com/creating-splash-screens-in-react-native/


## Install splash-screen
```bash
yarn add react-native-splash-screen
```

## To use react-native-splash-screen, you need to link the library to your project by running the following command:

```bash
rnpm link react-native-splash-screen
```


##Finally, you can run and test your basic project development server based on your platform:

### Android
```bash
npm run android
```

### iOS

```bash
npm run ios
```

To use react-native-splash-screen, you will need to configure the native code for your platform based on iOS or Android. This includes adding code to your app’s native files, such as the AppDelegate.m file on iOS or the MainActivity.java file on Android.


## Setting up Splash Screen on Android

Ensure you have Android Studio installed for Android. The project MainActivity.java file on Android will be updated as follows. The first step is to do plugin configuration. On your project android/app/src/main/java/com/splash_screen_project/MainActivity.java file, add the following configurations:

Add an import for the android OS bundle:

    import android.os.Bundle;

Import the splash screen packages:

    import org.devio.rn.splashscreen.SplashScreen;

On the onCreate() function, add the following code: This code will show the splash screen when the app is launched.

    SplashScreen.show(this);
> Note:- there probably wouldn't be onCreate function, in which case add onCreate method as follows:
>  ```java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
   ```

Subsequently, in the `app/src/main/res/layout` directory, create a launch_screen.xml file. This file will add the following for the splash screen image:

    <?xml version="1.0" encoding="utf-8"?>
        <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:orientation="vertical" android:layout_width="match_parent"
            android:layout_height="match_parent">
            <ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />
        </RelativeLayout>

Save your image asset in the `android/app/src/main/res/drawable/splash.png` folder. It’s good to remember that launch_screen is the image asset that you want to load as the splash screen. If you change the image name, ensure this change is reflected in the `launch_screen.xml` file as well.

### Setting up Splash Screen on IOS

To target an iOS-based platform, you must add platform-specific code configurations. Below is the iOS native code you will require so your application can load splash screens on iOS-based devices. While making these changes, ensure you have Xcode installed to run the iOS version of your app.

On the `ios/SplashScreenProject/AppDelegate.m` file, add the following changes:

1. Add an import for the React Native splash screen:

        #import "RNSplashScreen.h"

2. On the didFinishLaunchingWithOptions, show and load the screen. Add the code just above return:

         [RNSplashScreen show];


## Loading the Splash Screen

The platform code is complete. To display the splash screen, you need to refactor the JavaScript code of your application, import the library, and use its APIs to control the splash screen.

These changes will go inside the `src/App.tsx` file as follows:

Import the react-native-splash-screen:

    import SplashScreen from 'react-native-splash-screen'

Show the splash screen for 5 seconds and hide it once this time is over:

```typescript jsx
useEffect( () => {
  async function prepare(){
    try {
      // our api calls will be here.
      new Promise(resolve => setTimeout(resolve,5000)); // wait for 5 secs
    } catch(e){
      console.warn(e);
    } finally{
      SplashScreen.hide();
    }
  }
  prepare();
});
```

Now you can run your platform command to test this example.

## Android
    npm run android

## iOS
    npm run ios

You should get the application splash screen based on the asset you used:
