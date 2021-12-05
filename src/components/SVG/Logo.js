

function Logo(props) {
  return (
    <svg
      width={206.532}
      height={143.633}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='146.734 3.184 206.532 143.633'
      style={{
        background: "0 0",
      }}
      preserveAspectRatio='xMidYMid'
      {...props}>
      <defs>
        <filter
          id='prefix__editing-hole'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'>
          <feFlood floodColor='#000' result='black' />
          <feMorphology
            operator='dilate'
            radius={2}
            in='SourceGraphic'
            result='erode'
          />
          <feGaussianBlur in='erode' stdDeviation={4} result='blur' />
          <feOffset in='blur' dx={2} dy={2} result='offset' />
          <feComposite operator='atop' in='offset' in2='black' result='merge' />
          <feComposite
            operator='in'
            in='merge'
            in2='SourceGraphic'
            result='inner-shadow'
          />
        </filter>
      </defs>
      <g filter='url(#prefix__editing-hole)'>
        <path
          d='M213.585 63.225h-3.84v30.08q0 6.72-4.06 9.92-4.07 3.2-10.92 3.2-3.9 0-7.42-2.05t-3.52-4.86q0-1.09.7-2.5l3.84-7.42 2.31.7-.58 3.97q-.25 2.24-.25 4.22 0 1.99 1.37 3.46 1.38 1.47 3.71 1.47 2.34 0 3.78-1.6t1.44-4.8v-33.79h-6.08v-2.56h19.52v2.56zm11.2 0h-4.29v-2.56h14.15l11.64 38.34 11.01-38.34h14.53v2.56h-4.35l2.3 39.68h3.84v2.56h-17.15v-2.56h3.65l-1.99-31.68-9.85 34.24h-9.67l-10.43-34.18-1.79 31.62h3.71v2.56h-11.39v-2.56h3.84l2.24-39.68zm81.79 24.77h-8.64v-2.88h18.24v21.76q0 7.04-4.22 10.4-4.23 3.36-11.39 3.36-4.23 0-8.1-2.15-3.87-2.14-3.87-5.85 0-.71.45-2.05l2.17-5.63q-5.63-2.5-9.05-8.45-3.43-5.95-3.43-13.38 0-10.11 5.79-16.76 5.8-6.66 16.1-6.66 5.18 0 9.98 2.05 4.8 2.05 4.8 4.86 0 1.09-.7 2.5l-3.58 5.89-2.31-.77.32-2.37q.26-1.54.26-2.94 0-2.5-2.43-4.36-2.44-1.85-6.34-1.85-5.89 0-8.93 5.73-3.04 5.72-3.04 14.33t3.3 14.02q3.29 5.41 9.63 5.41 2.56 0 4.99-1.03v-13.18zm-8.32 18.43q-2.24 0-4.29-.58v1.99q0 7.29 3.08 9.02 1.4.77 3.87.77 2.46 0 4.06-1.76 1.6-1.76 1.6-5.28v-5.82q-3.84 1.66-8.32 1.66z'
          fill='rgba(0%,0%,0%,0.809)'
        />
      </g>
      <style />
    </svg>
  );
}

export default Logo;
