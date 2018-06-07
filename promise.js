const getJSON = function(url,type,data) {
    const promise = new Promise(function(resolve, reject){
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            };
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open(type, url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        if(type=='get'){
            client.send();
        }else {
            client.setRequestHeader("Content-Type","application/json");//data只能是JSON字符串
            client.send(JSON.stringify(data))  //post请求传入string
        }

    });
    return promise;
};

$(function() {
    $("button").click(function() {
        getJSON('http://localhost:3000/info','get')
            .then(function(json) {
                //success
                console.log('ok');
            })
            .catch(function(error) {
                console.error('出错了', error);
            });
    });
    //JQUERY 1.5.0返回的是xhr对象  高于1.5.0返回的deferred对象
})