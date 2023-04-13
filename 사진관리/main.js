const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrOfFiles) {
    //readdirSync는 해당 디렉토리의 파일 목록을 배열로 반환
    // 즉, 모든 파일을 배열로 반환
    const files = fs.readdirSync(dirPath);

    files.forEach(function(file) {
        // const destPath = dirPath + "\\" + file;
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

function getDuplicated(baseDir) {
    //existsSync: 해당 경로에 파일이나 폴더가 존재하는지 확인
    //파일이 존재하는지 유효성 검사 
    if (!fs.existsSync(baseDir)) {
        console.log("폴더가 존재하지 않음.");
        return;
    }

    const duplicatedDir = path.join(baseDir, 'duplicated');
    console.log(duplicatedDir);
    // 폴더가 존재하지 않으면 폴더 생성
    if (!fs.existsSync(duplicatedDir)) {
        // mkdirSync: 폴더 생성
        fs.mkdirSync(duplicatedDir);
    }
    // [] 없으면 에러 발생
    // 그 이유는 getAllFiles 함수에서 arrOfFiles를 초기화 하지 않았기 때문
    // base 폴더에 있는 모든 파일들의 목록(list)
    const arrayOfFiles = getAllFiles(baseDir, []);
    // 중복된 파일들(절대 경로) list
    const duplicatedFiles = [];

    // file : 파일의 절대 경로(String)
    arrayOfFiles.forEach((file, index) => {
        // 절대 경로에서 파일이름만 추출
        const fileName = path.basename(file);
        // 같은 파일명을 가진 경로의 index를 찾는다. 
        const duplicatedIdx = arrayOfFiles.findIndex((otherFile, otherIndex) => {
                if (otherIndex > index && otherFile.includes(fileName)) {
                    return true;
                } else {
                    return false;
                }
            })
            // 중복된 파일이 존재하면 중복된 파일의 절대 경로를 duplicatedFiles에 추가
        if (duplicatedIdx > -1) {
            const duplicatedFile = arrayOfFiles[duplicatedIdx];
            duplicatedFiles.push(file); // 중복된 파일의 절대경로
            duplicatedFiles.push(duplicatedFile); // 중복된 파일의 절대경로 
        }
    });
    return duplicatedFiles;
}

// const files = getAllFiles(__dirname + "\\base", []);
// const files = getAllFiles(path.join(__dirname, 'base'), []);
// console.log(files.join('\n'));

const files = getDuplicated(path.join(__dirname, 'base'));
console.log(files.join('\n'));