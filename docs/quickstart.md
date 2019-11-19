# install documentation

- build apk
~~~
$ keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

$ cd android
$ ./gradlew assembleRelease
~~~
