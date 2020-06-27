---
title: React Native launch troubleshooting in a legacy versions
date: 2020-06-27
status: published
category: react-native
cover: cover.jpg
bannerCredit:  ['Ashkan Forouzani','https://unsplash.com/@ashkfor121']

---



This memo will be useful for those who faced issues with running react native < **0.59v** on macOS **_mojave_**.
I have been struggled with running **RN 0.55**. During the week I was trying to run the app, 
I have been solving each issue step by step when all the issues had been done I decided to write a small memo to collect all problems that I had in one place.

The first thing you should use _**legacy build system**_ for your app.

 1. Open **XCODE**  
```console
file > workspace settings -> build
    system: legacy build system
```
 2. Try to run:
 ```console 
 react-native run-ios
```   
<br/>  
The issues that I had during the launch **RN 0.55** using **_Xcode 11_** and mac os **_mojave_** are described below:
<br/><br/>


## 1. Could not find iPhone 6 simulator.
 
1. Run:
```console 
xcrun simctl list devices
```
2. Check available simulators

3. Run:
```console 
react-native run-ios --simulator 'SIMULATOR_NAME'
```
<br/><br/>


## 2. Success build but simulator crash after launch. <br/>

Open `node_modules/react-native/React/Base/RCTModuleMethod.mm`.

Replace `RCTParseUnused` method to
```objectivec
    static  BOOL  RCTParseUnused(const  char  **input)
    {
    return  RCTReadString(input, "__attribute__((unused))") ||
    RCTReadString(input, "__attribute__((__unused__))") ||
    RCTReadString(input, "__unused");
    }
```

<br/>[Original source](https://github.com/facebook/react-native/issues/25138#issuecomment-533771736)

___


## 3. Build error: _'React/RCTImageLoaderProtocol.h'_ file not found.

Replace
```objectivec 
#import <React/RCTImageLoaderProtocol.h>
```
to  
```objectivec
#import <React/RCTImageLoader.h>
```

<br/>[Original source](https://github.com/itinance/react-native-fs/issues/791#issuecomment-544995760)


___

## 4.Xcode build fails to download third-party dependencies.

1.
```bash
rm -rf node_modules/ && yarn cache clean && yarn install and rm -rf ~/.rncache
```
2.
```bash 
cd node_modules/react-native/scripts
```
3.
```bash 
./ios-install-third-party.sh
```
_If your network is slow, you can download the packages separately and move them to the rncache folder_
1. folly-2016.10.31.00
2. double-conversion-1.1.5
3. glog-0.3.5
4. boost_1_63_0

```bash
cd <Your-Project-Folder>/node_modules/react-native/third-party/glog-0.3.5
../../scripts/ios-configure-glog.sh
```
<br/>[Original source](https://github.com/facebook/react-native/issues/20774)

<br/><br/>

<p style="text-align:center"><i>I hope it was useful for you, many thanks.</i></p> 
