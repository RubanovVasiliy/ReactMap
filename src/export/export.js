function download(data, filename, type) {
    let file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        let a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function exportObj(data) {
    if (data.length < 1) {
        return
    }
    let items = data
    let replacer = (key, value) => value === null ? '' : value
    let header = Object.keys(items[0])
    const csv = [
        header.join(','), // header row first
        ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(',')).sort((a, b) => a.id < b.id)
    ].join('\r\n')
    download(csv, 'objects.csv', 'text/csv')
}

export default exportObj