const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrOfFiles) {
    // arrOfFiles가 undefined면 빈 배열을 할당한다.
    arrOfFiles = arrOfFiles || [];
    //readdirSync는 해당 디렉토리의 파일 목록을 배열로 반환
    // 즉, 모든 파일을 배열로 반환
    const files = fs.readdirSync(dirPath);
    files.forEach(function(file) {
        // destPath는 절대경로
        const destPath = path.join(dirPath, file);

        // 폴더(디렉토리)라면 해당 폴더에 있는 모든 파일목록들을 체크한다.
        if (fs.statSync(destPath).isDirectory()) {
            getAllFiles(destPath, arrOfFiles);
        } else {
            // 파일이라면 파일 목록에 추가
            arrOfFiles.push(destPath);
        }
    });
    return arrOfFiles;
}

function changeFileName(baseDir) {
    const arrayOfFiles = getAllFiles(baseDir);
    // file : 파일의 절대 경로(String)
    arrayOfFiles.forEach((file, index) => {
        // 절대 경로에서 "[기밀]"만 추출
        const fileName = '[기밀]';
        // 만약 파일명에 "[기밀]"이 포함되어 있다면
        if (file.includes(fileName)) {
            // 파일명에서 "[기밀]"을 제외한 파일명으로 파일명을 변경해준다.
            const newFileName = file.replace(fileName, '');
            // 파일명을 변경해준다.
            fs.renameSync(file, newFileName);
        }
    });
    return arrayOfFiles;
}

const files = changeFileName(path.join(__dirname, '새폴더'));
console.log(files.join('\n'));