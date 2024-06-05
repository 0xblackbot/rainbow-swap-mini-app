import {FC} from 'react';

interface Props {
    width?: string;
    height?: string;
    className?: string;
}

export const LogoText: FC<Props> = ({
    height = '16px',
    width = '16px',
    className = ''
}): JSX.Element => (
    <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1150 478"
        preserveAspectRatio="xMidYMid meet"
        style={{width, height}}
        className={className}
    >
        <g
            transform="translate(0.000000,478.000000) scale(0.100000,-0.100000)"
            stroke="none"
        >
            <path
                d="M8420 4404 c-163 -31 -305 -111 -396 -222 -61 -73 -127 -214 -156
   -328 -19 -77 -22 -115 -22 -289 0 -239 16 -321 94 -482 41 -83 64 -116 123
   -175 124 -125 252 -177 458 -185 234 -10 400 47 533 181 85 85 128 156 168
   272 41 118 58 234 58 390 0 209 -43 399 -121 531 -47 79 -161 191 -234 230
   -112 58 -185 75 -340 78 -77 2 -151 1 -165 -1z m297 -355 c66 -32 115 -87 147
   -163 33 -79 46 -343 26 -520 -18 -150 -77 -243 -189 -294 -79 -36 -203 -36
   -281 0 -98 46 -158 126 -181 241 -14 70 -12 456 3 515 23 95 84 183 153 220
   94 50 222 50 322 1z"
            />
            <path
                d="M478 4384 c-5 -4 -8 -373 -8 -821 l0 -813 180 0 180 0 0 295 0 296
   126 -3 125 -3 138 -290 138 -290 201 -3 c111 -1 202 0 202 3 0 3 -70 145 -155
   317 -86 171 -154 312 -153 313 2 1 27 15 56 30 65 35 141 115 177 185 74 146
   72 377 -3 527 -60 117 -149 194 -275 236 -58 19 -92 21 -492 25 -236 2 -433 0
   -437 -4z m811 -339 c66 -39 76 -64 76 -185 0 -118 -8 -139 -69 -184 -25 -19
   -44 -21 -247 -24 l-219 -3 0 211 0 212 213 -4 c190 -3 215 -5 246 -23z"
            />
            <path
                d="M2453 4382 c-5 -4 -97 -270 -203 -592 -190 -576 -340 -1033 -340
   -1037 0 -2 83 -3 184 -3 l184 0 11 33 c5 17 31 103 57 190 l47 157 268 0 268
   0 35 -112 c19 -62 45 -148 57 -190 l23 -78 188 0 c103 0 188 3 188 7 0 8 -192
   604 -407 1263 -64 195 -121 358 -127 363 -14 9 -418 8 -433 -1z m261 -504 c26
   -90 64 -224 86 -298 22 -74 40 -136 40 -137 0 -2 -81 -3 -181 -3 -167 0 -180
   1 -175 18 15 49 117 400 141 485 15 53 31 97 35 97 4 0 28 -73 54 -162z"
            />
            <path
                d="M3587 4384 c-4 -4 -7 -72 -7 -151 l0 -143 105 0 105 0 0 -525 0 -525
   -105 0 -105 0 0 -145 0 -145 390 0 390 0 0 145 0 145 -105 0 -105 0 0 525 0
   525 105 0 105 0 0 144 c0 117 -3 145 -15 149 -21 9 -750 9 -758 1z"
            />
            <path
                d="M4655 4382 c-3 -3 -5 -371 -5 -819 l0 -813 175 0 175 0 2 534 3 534
   70 -147 c39 -80 171 -320 294 -533 l224 -388 199 0 198 0 -2 817 -3 818 -143
   3 c-79 2 -154 1 -167 -2 l-25 -6 -2 -538 -3 -537 -76 156 c-66 135 -456 823
   -512 902 l-19 28 -189 -2 c-104 -1 -191 -5 -194 -7z"
            />
            <path
                d="M6353 4384 c-10 -5 -13 -178 -13 -820 l0 -815 493 3 492 3 67 33 c93
   46 165 127 207 233 105 265 -7 516 -256 573 l-58 13 43 7 c89 14 164 72 209
   161 21 40 27 69 31 148 8 155 -20 246 -100 333 -51 55 -92 80 -171 106 -58 20
   -90 21 -497 24 -239 1 -441 0 -447 -2z m780 -327 c49 -32 67 -74 67 -155 0
   -87 -16 -131 -61 -163 -33 -23 -39 -24 -229 -24 l-195 0 -3 183 -2 184 198 -4
   c170 -3 202 -6 225 -21z m64 -663 c44 -32 63 -79 63 -159 0 -80 -19 -127 -63
   -159 -26 -20 -45 -21 -258 -24 l-229 -4 0 187 0 187 229 -4 c214 -3 232 -4
   258 -24z"
            />
            <path
                d="M9472 4381 c-13 -8 14 -138 243 -1141 31 -135 68 -300 83 -368 l27
   -122 210 2 210 3 36 155 c46 195 144 617 200 863 24 103 46 187 49 187 3 0 22
   -78 43 -173 49 -218 88 -390 171 -746 36 -156 66 -285 66 -287 0 -2 94 -4 209
   -4 l209 0 27 118 c15 64 48 209 75 322 26 113 71 304 99 425 28 121 78 336
   111 477 33 142 60 264 60 272 0 20 -29 24 -188 26 -139 1 -142 0 -152 -22 -9
   -22 -166 -805 -211 -1053 -12 -66 -25 -126 -29 -133 -3 -7 -16 30 -28 85 -50
   225 -115 509 -222 973 -18 74 -37 138 -43 142 -17 11 -359 9 -376 -1 -8 -5
   -25 -54 -37 -108 -63 -273 -140 -608 -189 -825 -73 -323 -68 -311 -88 -192
   -20 114 -108 565 -174 894 -25 124 -50 228 -56 232 -14 9 -320 8 -335 -1z"
            />
            <path
                d="M932 1949 c-249 -27 -430 -156 -486 -348 -23 -79 -21 -232 4 -313 60
   -196 220 -292 555 -333 206 -25 268 -67 267 -180 0 -61 -19 -102 -61 -138 -46
   -39 -97 -52 -196 -52 -139 1 -252 46 -358 144 l-43 40 -118 -118 c-134 -134
   -131 -125 -50 -195 167 -142 354 -203 594 -193 211 9 362 67 467 181 105 113
   149 266 125 436 -35 244 -170 347 -537 410 -254 43 -294 66 -303 173 -8 103
   61 158 208 165 140 7 241 -29 333 -116 l37 -36 122 121 122 122 -29 32 c-47
   49 -148 118 -213 144 -116 47 -296 69 -440 54z"
            />
            <path
                d="M1817 1923 c-3 -5 16 -100 43 -213 26 -113 57 -250 70 -305 59 -263
   125 -556 184 -820 36 -159 66 -291 66 -292 0 -2 94 -3 209 -3 l209 0 22 98
   c12 53 30 132 41 174 25 100 142 605 180 778 33 149 39 173 44 168 2 -2 29
   -114 59 -248 51 -229 90 -398 184 -800 l38 -165 207 -3 206 -2 10 37 c10 40
   70 296 145 618 24 105 67 289 95 410 118 508 129 560 125 567 -3 4 -81 8 -173
   8 l-167 0 -28 -142 c-15 -79 -45 -228 -66 -333 -21 -104 -63 -313 -91 -462
   -29 -150 -57 -273 -61 -273 -4 0 -8 9 -8 19 0 19 -33 166 -146 656 -76 329
   -115 497 -121 518 -4 15 -22 17 -202 17 l-198 0 -33 -147 c-18 -82 -56 -249
   -85 -373 -29 -124 -76 -332 -106 -462 -29 -130 -55 -236 -56 -234 -2 2 -21 92
   -42 202 -78 397 -171 871 -184 939 l-13 70 -176 3 c-97 1 -179 -1 -181 -5z"
            />
            <path
                d="M4588 1883 c-8 -27 -60 -185 -116 -353 -233 -703 -402 -1221 -402
   -1230 0 -6 72 -10 183 -10 l182 0 56 188 56 187 270 3 271 2 11 -32 c5 -18 28
   -96 51 -173 23 -77 43 -148 46 -157 5 -16 23 -18 195 -18 104 0 189 3 189 7 0
   5 -29 96 -64 203 -36 107 -130 398 -211 645 -80 248 -171 525 -201 618 l-56
   167 -222 0 -222 0 -16 -47z m263 -396 c14 -51 52 -181 84 -290 32 -109 54
   -201 50 -205 -10 -11 -333 -13 -340 -3 -3 5 19 92 49 193 29 101 68 234 86
   296 18 62 35 110 38 107 3 -3 18 -47 33 -98z"
            />
            <path
                d="M5800 1111 l0 -821 180 0 180 0 0 289 0 288 253 6 c276 6 311 12 417
   68 108 58 200 185 230 321 19 85 9 278 -19 350 -54 140 -156 241 -291 289 -63
   23 -75 23 -507 27 l-443 4 0 -821z m827 476 c44 -23 65 -68 71 -148 10 -143
   -24 -216 -112 -238 -25 -6 -128 -11 -235 -11 l-191 0 0 211 0 210 218 -3 c185
   -3 222 -6 249 -21z"
            />
        </g>
    </svg>
);