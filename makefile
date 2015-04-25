sign: 
	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/myKey.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk blahBlah
	touch ~/blah.apk
	rm ~/blah.apk
	/opt/android-sdk/build-tools/22.0.1/zipalign -v 4 ~/projects/mobile_bcrypt/mobile_bcrypt/platforms/android/build/outputs/apk/android-release-unsigned.apk ~/blah.apk
