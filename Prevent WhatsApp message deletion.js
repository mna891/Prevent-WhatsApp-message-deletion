
Java.perform(function() {
    console.log("[*] Frida script loaded. Searching for the target class and method...");


    const targetClassName = 'X.1Cr';
    const TargetClass = Java.use(targetClassName);

    const targetMethodName = 'A00';

    TargetClass[targetMethodName].implementation = function(arg1, arg2, arg3, arg4) {
        
        console.log("[!] Anti-Revoke: Intercepted a message revoke request. Preventing deletion!");
        

        return false;
    };

    console.log(`[*] Hooked successfully on: ${targetClassName}.${targetMethodName}`);
});