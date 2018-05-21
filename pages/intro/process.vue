<template>
    <div class="process">
        <h2 class="content-title">교과과정</h2>
        <ul class="tab">
            <li><a href="#" :class="now == 11 ? 'active' : ''" @click="now = 11">1 - 1</a></li>
            <li><a href="#" :class="now == 12 ? 'active' : ''" @click="now = 12">1 - 2</a></li>
            <li><a href="#" :class="now == 21 ? 'active' : ''" @click="now = 21">2 - 1</a></li>
            <li><a href="#" :class="now == 22 ? 'active' : ''" @click="now = 22">2 - 2</a></li>
            <li><a href="#" :class="now == 31 ? 'active' : ''" @click="now = 31">3 - 1</a></li>
            <li><a href="#" :class="now == 32 ? 'active' : ''" @click="now = 32">3 - 2</a></li>
            <li><a href="#" :class="now == 41 ? 'active' : ''" @click="now = 41">4 - 1</a></li>
            <li><a href="#" :class="now == 42 ? 'active' : ''" @click="now = 42">4 - 2</a></li>
        </ul>
        <section v-show="now == 11">
            <ul>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">공학멘토링</strong>
                        <span class="type">공학소양</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반수학1</strong>
                        <span class="type">공학기초(수학)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반물리학1</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반물리학실험1</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반화학1</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반화학실험1</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">프로그래밍</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">소프트웨어학개론</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
            </ul>
        </section>
        <section v-show="now == 12">
            <ul>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반수학2</strong>
                        <span class="type">공학기초(수학)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반물리학2</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반물리학실험2</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반화학2</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">일반화학실험2</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">고급프로그래밍</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">프로그래밍활용</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
            </ul>
        </section>
        <section v-show="now == 21">
            <ul>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">기술보고서작성</strong>
                        <span class="type">공학소양</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">창의적공학설계</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">이산수학</strong>
                        <span class="type">공학기초(수학)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">첨단제조산업의이해</strong>
                        <span class="type">공학소양</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">공학수학1</strong>
                        <span class="type">공학기초(공학수학1)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">객체지향프로그래밍</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">멀티미디어시스템</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">데이터베이스기초</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">Design pattern</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
            </ul>
        </section>
        <section v-show="now == 22">
            <ul>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">공학수학2</strong>
                        <span class="type">공학기초(수학)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">지구환경과학</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">지식재산과특허전략</strong>
                        <span class="type">공학소양</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">자료구조</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">컴퓨터구조</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">시스템프로그래밍</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">웹프로그래밍</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">컴퓨터와통신</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
            </ul>
        </section>
        <section v-show="now == 31">
            <ul>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">산업체현장실습1(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">산업체현장실습2(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">확률및통계학</strong>
                        <span class="type">공학기초(수학)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">공학생물</strong>
                        <span class="type">공학기초(기초과학영역)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">공학경제</strong>
                        <span class="type">공학소양</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">운영체제</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">알고리즘</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">컴퓨터그래픽스</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">컴퓨터네트워크</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">SW보안개론</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">모바일플랫폼</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">정보ㆍ컴퓨터교과교육론</strong>
                        <span class="type">교직</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
            </ul>
        </section>
        <section v-show="now == 32">
            <ul>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">공학수치해석</strong>
                        <span class="type">공학기초(수학)</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">기술과경영</strong>
                        <span class="type">공학소양</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">소프트웨어공학</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">영상정보처리</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">인공지능</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">정보보호이론</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">멀티미디어신호처리</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">주제중심산학프로젝트2</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">고급데이터베이스</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">운영체제보안</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">서비스플랫폼</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">정보ㆍ컴퓨터교과교재연구및지도법</strong>
                        <span class="type">교직</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">자연공학교과논리및논술</strong>
                        <span class="type">교직</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
            </ul>
        </section>
        <section v-show="now == 41">
            <ul>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">국내인턴십1(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">국내인턴십2(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">국외인턴십1(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">국외인턴십2(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">지식재산기반창업</strong>
                        <span class="type">공학소양</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">실무중심산학협력프로젝트1</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">데이터마이닝</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">시스템분석및설계</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">IoT 플랫폼</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">시큐어코딩</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">인터넷보안</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
            </ul>
        </section>
        <section v-show="now == 42">
            <ul>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">국내인턴십1(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">국내인턴십2(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">국외인턴십1(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">국외인턴십2(소프트)</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">공학윤리</strong>
                        <span class="type">공학소양</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">실무중심산학협력프로젝트2</strong>
                        <span class="type">전공필수</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">딥러닝/클라우드</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">악성코드분석</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
                <li class="part">
                    <div class="subject-line">
                        <strong class="subject">오토마타와컴파일러</strong>
                        <span class="type">전공선택</span>
                    </div>
                    <div class="detail">
                        상세내용이 곧 채워질 예정입니다
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Introprocess',
    data () {
        return {
            now: 11
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~/assets/css/_base.scss';
    .process{
        .part{padding:20px 0;border-bottom:1px dashed #ddd;}
        .subject-line{display:block;padding:10px 0;}
        .subject{font-size:19px;color:$color2-1;}
        .type{color:#999;}
        .detail{min-height:100px;}
    }
</style>
