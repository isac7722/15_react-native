class Student{
    id = "";
    name = "";
    content ="";
    img = "";
    link = "";
    constructor(id, name,content, img, link){
        this.id=id;
        this.name=name;
        this.content = content;
        this.img = img;
        this.link = link;
    }
}


export const students=[
    new Student(1,"James Gosling","캐나다 출신의 컴퓨터 과학자로, 자바(Java) 프로그래밍 언어의 창시자",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/James_Gosling_2008.jpg/225px-James_Gosling_2008.jpg",
    "https://en.wikipedia.org/wiki/James_Gosling"
    ),

    new Student(2,"Linus Torvalds"," 태어난 스웨덴계 핀란드인으로서 소프트웨어 엔지니어이자 리눅스 커널과 깃을 최초로 개발한 사람",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/255px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
    "https://en.wikipedia.org/wiki/Linus_Torvalds"
    ),


    new Student(3,"Steven Paul Jobs", "처음으로 PC에 GUI를 사용, mouse를 PC에 적용하여 대중화, 온라인 음악시장의 성공적인 모델을 보여준 인물",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/225px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    "https://en.wikipedia.org/wiki/Steve_Jobs"
    ),
    
    new Student(4,"Tim Berners-Lee","1990년에 인터넷과 하이퍼텍스트의 개념을 합치면서 WWW(World Wide Web)을 만들어 냈다",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/220px-Sir_Tim_Berners-Lee_%28cropped%29.jpg",
    "https://en.wikipedia.org/wiki/Tim_Berners-Lee"),
    
    new Student(5,"Bill Gates","마이크로소프트를 창립하고 윈도우즈 운영체제를 개발하여 개인용 컴퓨터 보급에 큰 역할을 했다",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/220px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg",
    "https://en.wikipedia.org/wiki/Bill_Gates"),
    
    new Student(6,"Richard Stallman","오픈 소스 운동과 GNU 프로젝트의 창시자로 알려져 있다.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Richard_Stallman_at_LibrePlanet_2019.jpg/220px-Richard_Stallman_at_LibrePlanet_2019.jpg",
    "https://en.wikipedia.org/wiki/Richard_Stallman"),
    
    
    new Student(7,"Ted Codd","영국의 컴퓨터 과학자로, 관계형 데이터베이스의 개념을 처음 제안한 주요 인물 "
    ,"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Edgar_F_Codd.jpg/150px-Edgar_F_Codd.jpg"
    ,"https://en.wikipedia.org/wiki/Edgar_F._Codd"),
    
    new Student(8, "Alan Turing","컴퓨터 과학과 인공지능 분야의 선구자로, 튜링 기계 개념과 튜링 테스트 등을 제시한 수학자",
     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg/220px-Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg",
     "https://en.wikipedia.org/wiki/Alan_Turing")
]