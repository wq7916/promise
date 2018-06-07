const ajaxPromise = function (url, type, data) {
    const promise = new Promise(function(reslove, reject){
        $.ajax({
            url: url,
            type: type,
            data: data || '',
            success: function (data) {
                reslove(data)
            },
            error: function (error) {
                reject(error)
            }
        })
    })
    return promise
}