function run(argv){ 
    // ログ出力
    console.log(argv.length + "つ引数が渡されました。");
    // console.log(JSON.stringify(argv));

    var app = Application("System Events");


    // ダイアログ表示
    app.includeStandardAdditions = true;
    app.displayDialog(argv.length + "つ引数が渡されました。");
}

