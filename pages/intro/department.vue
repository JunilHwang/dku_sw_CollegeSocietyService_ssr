<template>
    <div class="department">
        <h2 class="content-title">학과소개</h2>
        <div class="content">
            <dl>
                <dt>
                    <i class="fas fa-check"></i>
                    <strong>소개</strong>
                </dt>
                <dd>
                    <p>소프트웨어 분야의 인재는 모바일, 멀티미디어, IT 융합 기술 등 다양하고 새로운 환경에 빠르게 적응하고 새로운 변화를 창출할 수 있도록 해야 한다. 따라서 본 소프트웨어학과에서는 체계적인 프로그래밍 교육을 기반으로 다음과 같은 기술에 대한 심도있는 교육을 한다.</p>
                    <ul>
                        <li>1. 데이터베이스, 소프트웨어공학 등의 소프트웨어 제작 및 관리</li>
                        <li>2. 네트워크, 운영체제, 보안 등 시스템 소프트웨어의 구성 및 원리</li>
                        <li>3. 스마트폰, 임베디드, 모바일 앱, IoT 등의 모바일 컴퓨팅</li>
                        <li>4. 컴퓨터 그래픽스, 입체영상, 가상/증강현실 등의 IT 융합 기술</li>
                    </ul>
                </dd>
                <dt>
                    <i class="fas fa-check"></i>
                    <strong>필요한 적성</strong>
                </dt>
                <dd>
                    <p>소프트웨어학과는 급변하는 이 시대의 정보과학을 선도하고 개척해 나갈 전문가를 양성하기 위한 분야이다. 그래서 다음과 같은 역량이 필요하다.</p>
                    <ul>
                        <li>1. 새로운 학문을 끊임없이 연구하고 논리적으로 분석하며, 적극적으로 도전하는 개척정신과 평범함을 뛰어넘는 자유로운 창의력</li>
                        <li>2. 강한 집중력과 끈기 있는 학습자세는 훌륭한 프로그래머로 성장할 수 있는 기본 자질</li>
                        <li>3. 팀을 구성하고 지도할 수 있는 능력</li>
                        <li>4. 점점 확산되고 있는 해킹과 인권에 관계된 개인정보 보호 등에 관하여서 강한 책임감과 도덕성</li>
                        <li>5. 급변하는 세계를 바로 읽을 줄 알고 사랑할 줄 아는 능력</li>
                    </ul>
                </dd>
                <dt>
                    <i class="fas fa-check"></i>
                    <strong>졸업 후 진로</strong>
                </dt>
                <dd>
                    <ul>
                        <li>1. 응용소프트웨어 기획, 개발, 관리, 유지보수 및 컨설팅</li>
                        <li>2. 벤처기업 및 모바일 앱 1인 창조기업을 창업</li>
                        <li>3. 컴퓨터관련 교육직 혹은 공무원</li>
                        <li>4. 대학원에 진학하거나 연구소에 취업하여 심도 있는 연구를 수행</li>
                        <li>5. 전문 프로그래머로서 일본, 미국 등 해외 소프트웨어 산업분야에서 업무능력을 발휘</li>
                        <li>6. 대표적인 삼성 SDS, LGCNS, SKC&amp;C, SKT, KT, 엔씨소프트, NHN, 마이크로소프트, 프로그램 개발업체, 기타 은행/기업 전산실 및 연구기관/공공기관 전산실 등</li>
                    </ul>
                </dd>
            </dl>
        </div>
        <div class="info">
            <ul>
                <li>
                    <i class="fas fa-phone"></i>
                    <strong>전화번호</strong>
                    <span>031-8005-3227,3966</span>
                </li>
            </ul>
            <ul>
                <li>
                    <i class="fas fa-fax"></i>
                    <strong>팩스</strong>
                    <span>031-8021-7203</span>
                </li>
            </ul>
            <ul>
                <li>
                    <i class="fas fa-map-marker-alt"></i>
                    <strong>위치</strong>
                    <span>자연과학관 501호</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroDepartment'
}
</script>

<style lang="scss" scoped>
    @import '~/assets/css/_base.scss';
    .content{padding:30px 0;
        dt{font-size:19px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #ddd;color:$color1-2;}
        dd{margin-bottom:30px;color:#666;line-height:180%;}
    }
    .info{display:flex;justify-content:space-between;font-size:17px;}
    .fas{margin-right:10px;}

    @include mobile () {
        .content{
            dt{font-size:17px;}
        }
        .info{display:block;font-size:17px;
            ul{margin-bottom:15px;}
        }
    }
</style>
