import{r as Re,am as me,c4 as Fe,cm as Oe,c5 as Se,x as Pt,ap as Ke,l as di,bF as nt,B as Ye,cg as sn,T as pi,an as At,s as ye,bE as Me,X as zt,cl as hi,a2 as _i,a1 as nn,bX as pt,W as et,a_ as ze,R as Xt,S as Yt,v as ht,w as st,aE as ft,aq as wi,aC as tt,c8 as _t,n as mi,m as Mt,ae as an,ab as rt,cp as Ui,bV as Pi,bU as Di,ce as Li,c6 as Xe,I as vi,H as Ii,a9 as gi,bQ as yi,Y as cn,aS as Ei,aT as Ni,c3 as We,F as Oi,az as Fi,e as Bi,A as Gi,p as Hi,by as Vi,af as ki,ag as Si,b as Wi,at as zi,av as Xi,bW as Yi,M as Rt,aG as Tt,bP as Ki,aK as qi,a6 as $i,aZ as ji,aw as dt,aa as bt,bA as Zi,bN as Qi,a as lt,aM as Ji,t as ea,aN as ta,u as na,aO as ia,aP as aa,aQ as ra,aR as oa,N as sa,O as ca,bK as la,bJ as ua,bL as fa,aL as da,cc as pa,aI as Kt,_ as qt,a0 as $t,Q as jt,a8 as Zt,h as Qt,aB as Jt,D as ha,y as ln,z as _a,E as ma,au as un,bO as fn,d as dn,ar as va,ao as ga,as as Ea,q as Sa,bz as Ma,ac as mt,ad as Lt,ax as vt,ay as Ta,aH as xa,Z as Aa,$ as Ra,P as ba,a7 as Ca,g as wa,aA as Ua,aD as at,K as Ct,J as rn,b$ as wt,bZ as Ut,c2 as en,ci as Pa,c0 as Da,c1 as La,b_ as Ia,bY as ya,o as Na,bG as Oa,f as Fa,bl as Ba,bw as Ga,bx as Ha,bt as Va,bu as ka,a$ as Wa,bs as It,bi as yt,bj as Nt,bk as Ot,br as pn,bq as hn,bh as _n,bg as mn,bo as vn,bp as gn,bf as En,b6 as Sn,b7 as Mn,b8 as Tn,b9 as xn,ba as An,bb as Rn,bc as bn,bd as Cn,b1 as wn,b2 as Un,b3 as Pn,b0 as Dn,b4 as Ln,b5 as In,be as yn,bm as Nn,bn as On,aX as Fn,bC as Bn,aW as Gn,bB as Hn,U as za,aV as Xa}from"./birthday-three-0-C4S3ksJp.js";import{r as Mi,q as Ya,W as Ka,P as xt,a as qa,D as Ti,F as $a,M as ja,n as Za,E as xi,y as Ft}from"./birthday-three-1-uJtQ5KcI.js";import{K as Qa,aT as Ja,aS as er,$ as tr,_ as nr,aR as ir,aQ as ar,aP as rr,aO as or,af as sr,v as cr,u as lr,t as ur,aN as fr,aM as dr,aL as pr,aK as hr,aJ as _r,aI as mr,aH as vr,aG as gr,aF as Er,aD as Sr,aE as Mr,aC as Tr,aB as xr,aA as Ar,az as Rr,ay as br,ax as Cr,aw as wr,av as Ur,au as Pr,at as Dr,ai as Lr,aj as Ir,ah as yr,aq as Nr,ap as Or,ao as Fr,an as Br,as as Gr,ar as Hr,am as Vr,al as kr,ak as Wr,ag as zr,ad as Xr,a9 as Yr,a8 as Kr,aa as qr,ab as $r,a7 as jr,a6 as Zr,a5 as Qr,a4 as Jr,a2 as eo,a3 as to,J as no,a1 as io,a0 as ao,Z as ro,Y as oo,X as so,U as co,M as lo,G as uo,E as fo,C as po,B as ho,z as _o,y as mo,x as vo,w as go,s as Eo,ae as So,r as Mo,q as To,p as xo,o as Ao,n as Ro,m as bo,l as Co,k as wo,j as Uo,i as Po,h as Do,g as Lo,f as Io,O as yo,ac as Vn,b as No,W as Oo}from"./birthday-three-2-CYNWhGc2.js";const Fo=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );

		#ifdef USE_REVERSED_DEPTH_BUFFER

			return step( depth, compare );

		#else

			return step( compare, depth );

		#endif

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		#ifdef USE_REVERSED_DEPTH_BUFFER

			float hard_shadow = step( distribution.x, compare );

		#else

			float hard_shadow = step( compare, distribution.x );

		#endif

		if ( hard_shadow != 1.0 ) {

			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`,Bo=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Go=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`,Ho=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,Vo=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,ko=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`,Wo=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,zo=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,Xo=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Yo=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,Ko=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,qo=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,$o=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,jo=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,Zo=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,Qo=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,Jo=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`,es=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,ts=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,ns=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,is=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,as=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,rs=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,os=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,ss=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,cs=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z

	#ifdef USE_REVERSED_DEPTH_BUFFER

		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];

	#else

		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;

	#endif

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`,ls=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,us=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,fs=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,ds=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,ps=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,hs=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,_s=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,ms=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,vs=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,gs=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Es=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Ss=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Ms=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Ts=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,xs=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,As=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Rs=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,bs=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Cs=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,ws=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Us=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,Ps=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Ds=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Ls=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,Is=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,ys=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,fe={alphahash_fragment:Io,alphahash_pars_fragment:Lo,alphamap_fragment:Do,alphamap_pars_fragment:Po,alphatest_fragment:Uo,alphatest_pars_fragment:wo,aomap_fragment:Co,aomap_pars_fragment:bo,batching_pars_vertex:Ro,batching_vertex:Ao,begin_vertex:xo,beginnormal_vertex:To,bsdfs:Mo,iridescence_fragment:So,bumpmap_pars_fragment:Eo,clipping_planes_fragment:go,clipping_planes_pars_fragment:vo,clipping_planes_pars_vertex:mo,clipping_planes_vertex:_o,color_fragment:ho,color_pars_fragment:po,color_pars_vertex:fo,color_vertex:uo,common:lo,cube_uv_reflection_fragment:co,defaultnormal_vertex:so,displacementmap_pars_vertex:oo,displacementmap_vertex:ro,emissivemap_fragment:ao,emissivemap_pars_fragment:io,colorspace_fragment:no,colorspace_pars_fragment:Qa,envmap_fragment:to,envmap_common_pars_fragment:eo,envmap_pars_fragment:Jr,envmap_pars_vertex:Qr,envmap_physical_pars_fragment:Zr,envmap_vertex:jr,fog_vertex:$r,fog_pars_vertex:qr,fog_fragment:Kr,fog_pars_fragment:Yr,gradientmap_pars_fragment:Xr,lightmap_pars_fragment:zr,lights_lambert_fragment:Wr,lights_lambert_pars_fragment:kr,lights_pars_begin:Vr,lights_toon_fragment:Hr,lights_toon_pars_fragment:Gr,lights_phong_fragment:Br,lights_phong_pars_fragment:Fr,lights_physical_fragment:Or,lights_physical_pars_fragment:Nr,lights_fragment_begin:yr,lights_fragment_maps:Ir,lights_fragment_end:Lr,logdepthbuf_fragment:Dr,logdepthbuf_pars_fragment:Pr,logdepthbuf_pars_vertex:Ur,logdepthbuf_vertex:wr,map_fragment:Cr,map_pars_fragment:br,map_particle_fragment:Rr,map_particle_pars_fragment:Ar,metalnessmap_fragment:xr,metalnessmap_pars_fragment:Tr,morphinstance_vertex:Mr,morphcolor_vertex:Sr,morphnormal_vertex:Er,morphtarget_pars_vertex:gr,morphtarget_vertex:vr,normal_fragment_begin:mr,normal_fragment_maps:_r,normal_pars_fragment:hr,normal_pars_vertex:pr,normal_vertex:dr,normalmap_pars_fragment:fr,clearcoat_normal_fragment_begin:ur,clearcoat_normal_fragment_maps:lr,clearcoat_pars_fragment:cr,iridescence_pars_fragment:sr,opaque_fragment:or,packing:rr,premultiplied_alpha_fragment:ar,project_vertex:ir,dithering_fragment:nr,dithering_pars_fragment:tr,roughnessmap_fragment:er,roughnessmap_pars_fragment:Ja,shadowmap_pars_fragment:Fo,shadowmap_pars_vertex:Bo,shadowmap_vertex:Go,shadowmask_pars_fragment:Ho,skinbase_vertex:Vo,skinning_pars_vertex:ko,skinning_vertex:Wo,skinnormal_vertex:zo,specularmap_fragment:Xo,specularmap_pars_fragment:Yo,tonemapping_fragment:Ko,tonemapping_pars_fragment:qo,transmission_fragment:$o,transmission_pars_fragment:jo,uv_pars_fragment:Zo,uv_pars_vertex:Qo,uv_vertex:Jo,worldpos_vertex:es,background_vert:ts,background_frag:ns,backgroundCube_vert:is,backgroundCube_frag:as,cube_vert:rs,cube_frag:os,depth_vert:ss,depth_frag:cs,distanceRGBA_vert:ls,distanceRGBA_frag:us,equirect_vert:fs,equirect_frag:ds,linedashed_vert:ps,linedashed_frag:hs,meshbasic_vert:_s,meshbasic_frag:ms,meshlambert_vert:vs,meshlambert_frag:gs,meshmatcap_vert:Es,meshmatcap_frag:Ss,meshnormal_vert:Ms,meshnormal_frag:Ts,meshphong_vert:xs,meshphong_frag:As,meshphysical_vert:Rs,meshphysical_frag:bs,meshtoon_vert:Cs,meshtoon_frag:ws,points_vert:Us,points_frag:Ps,shadow_vert:Ds,shadow_frag:Ls,sprite_vert:Is,sprite_frag:ys},K={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},ke={basic:{uniforms:Oe([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Oe([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new Re(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Oe([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Oe([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Oe([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new Re(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Oe([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Oe([K.points,K.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Oe([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Oe([K.common,K.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Oe([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Oe([K.sprite,K.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Oe([K.common,K.displacementmap,{referencePosition:{value:new Se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Oe([K.lights,K.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ke.physical={uniforms:Oe([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const gt={r:0,b:0,g:0},je=new pi,Ns=new At;function ml(e,n,t,i,s,o,d){const p=new Re(0);let R=o===!0?0:1,M,b,m=null,_=0,x=null;function y(v){let T=v.isScene===!0?v.background:null;return T&&T.isTexture&&(T=(v.backgroundBlurriness>0?t:n).get(T)),T}function w(v){let T=!1;const U=y(v);U===null?r(p,R):U&&U.isColor&&(r(U,1),T=!0);const E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,d):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(e.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function c(v,T){const U=y(T);U&&(U.isCubeTexture||U.mapping===Pt)?(b===void 0&&(b=new Ke(new di(1,1,1),new nt({name:"BackgroundCubeMaterial",uniforms:sn(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(E,C,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(b)),je.copy(T.backgroundRotation),je.x*=-1,je.y*=-1,je.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(je.y*=-1,je.z*=-1),b.material.uniforms.envMap.value=U,b.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(Ns.makeRotationFromEuler(je)),b.material.toneMapped=ye.getTransfer(U.colorSpace)!==Me,(m!==U||_!==U.version||x!==e.toneMapping)&&(b.material.needsUpdate=!0,m=U,_=U.version,x=e.toneMapping),b.layers.enableAll(),v.unshift(b,b.geometry,b.material,0,0,null)):U&&U.isTexture&&(M===void 0&&(M=new Ke(new Mi(2,2),new nt({name:"BackgroundMaterial",uniforms:sn(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),M.geometry.deleteAttribute("normal"),Object.defineProperty(M.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(M)),M.material.uniforms.t2D.value=U,M.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,M.material.toneMapped=ye.getTransfer(U.colorSpace)!==Me,U.matrixAutoUpdate===!0&&U.updateMatrix(),M.material.uniforms.uvTransform.value.copy(U.matrix),(m!==U||_!==U.version||x!==e.toneMapping)&&(M.material.needsUpdate=!0,m=U,_=U.version,x=e.toneMapping),M.layers.enableAll(),v.unshift(M,M.geometry,M.material,0,0,null))}function r(v,T){v.getRGB(gt,hi(e)),i.buffers.color.setClear(gt.r,gt.g,gt.b,T,d)}function A(){b!==void 0&&(b.geometry.dispose(),b.material.dispose(),b=void 0),M!==void 0&&(M.geometry.dispose(),M.material.dispose(),M=void 0)}return{getClearColor:function(){return p},setClearColor:function(v,T=1){p.set(v),R=T,r(p,R)},getClearAlpha:function(){return R},setClearAlpha:function(v){R=v,r(p,R)},render:w,addToRenderList:c,dispose:A}}function vl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=_(null);let o=s,d=!1;function p(l,g,D,B,G){let k=!1;const F=m(B,D,g);o!==F&&(o=F,M(o.object)),k=x(l,B,D,G),k&&y(l,B,D,G),G!==null&&n.update(G,e.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,T(l,g,D,B),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(G).buffer))}function R(){return e.createVertexArray()}function M(l){return e.bindVertexArray(l)}function b(l){return e.deleteVertexArray(l)}function m(l,g,D){const B=D.wireframe===!0;let G=i[l.id];G===void 0&&(G={},i[l.id]=G);let k=G[g.id];k===void 0&&(k={},G[g.id]=k);let F=k[B];return F===void 0&&(F=_(R()),k[B]=F),F}function _(l){const g=[],D=[],B=[];for(let G=0;G<t;G++)g[G]=0,D[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:D,attributeDivisors:B,object:l,attributes:{},index:null}}function x(l,g,D,B){const G=o.attributes,k=g.attributes;let F=0;const Z=D.getAttributes();for(const O in Z)if(Z[O].location>=0){const oe=G[O];let he=k[O];if(he===void 0&&(O==="instanceMatrix"&&l.instanceMatrix&&(he=l.instanceMatrix),O==="instanceColor"&&l.instanceColor&&(he=l.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;F++}return o.attributesNum!==F||o.index!==B}function y(l,g,D,B){const G={},k=g.attributes;let F=0;const Z=D.getAttributes();for(const O in Z)if(Z[O].location>=0){let oe=k[O];oe===void 0&&(O==="instanceMatrix"&&l.instanceMatrix&&(oe=l.instanceMatrix),O==="instanceColor"&&l.instanceColor&&(oe=l.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),G[O]=he,F++}o.attributes=G,o.attributesNum=F,o.index=B}function w(){const l=o.newAttributes;for(let g=0,D=l.length;g<D;g++)l[g]=0}function c(l){r(l,0)}function r(l,g){const D=o.newAttributes,B=o.enabledAttributes,G=o.attributeDivisors;D[l]=1,B[l]===0&&(e.enableVertexAttribArray(l),B[l]=1),G[l]!==g&&(e.vertexAttribDivisor(l,g),G[l]=g)}function A(){const l=o.newAttributes,g=o.enabledAttributes;for(let D=0,B=g.length;D<B;D++)g[D]!==l[D]&&(e.disableVertexAttribArray(D),g[D]=0)}function v(l,g,D,B,G,k,F){F===!0?e.vertexAttribIPointer(l,g,D,G,k):e.vertexAttribPointer(l,g,D,B,G,k)}function T(l,g,D,B){w();const G=B.attributes,k=D.getAttributes(),F=g.defaultAttributeValues;for(const Z in k){const O=k[Z];if(O.location>=0){let ne=G[Z];if(ne===void 0&&(Z==="instanceMatrix"&&l.instanceMatrix&&(ne=l.instanceMatrix),Z==="instanceColor"&&l.instanceColor&&(ne=l.instanceColor)),ne!==void 0){const oe=ne.normalized,he=ne.itemSize,Te=n.get(ne);if(Te===void 0)continue;const Le=Te.buffer,Pe=Te.type,Ce=Te.bytesPerElement,I=Pe===e.INT||Pe===e.UNSIGNED_INT||ne.gpuType===_i;if(ne.isInterleavedBufferAttribute){const V=ne.data,ee=V.stride,de=ne.offset;if(V.isInstancedInterleavedBuffer){for(let ie=0;ie<O.locationSize;ie++)r(O.location+ie,V.meshPerAttribute);l.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ie=0;ie<O.locationSize;ie++)c(O.location+ie);e.bindBuffer(e.ARRAY_BUFFER,Le);for(let ie=0;ie<O.locationSize;ie++)v(O.location+ie,he/O.locationSize,Pe,oe,ee*Ce,(de+he/O.locationSize*ie)*Ce,I)}else{if(ne.isInstancedBufferAttribute){for(let V=0;V<O.locationSize;V++)r(O.location+V,ne.meshPerAttribute);l.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let V=0;V<O.locationSize;V++)c(O.location+V);e.bindBuffer(e.ARRAY_BUFFER,Le);for(let V=0;V<O.locationSize;V++)v(O.location+V,he/O.locationSize,Pe,oe,he*Ce,he/O.locationSize*V*Ce,I)}}else if(F!==void 0){const oe=F[Z];if(oe!==void 0)switch(oe.length){case 2:e.vertexAttrib2fv(O.location,oe);break;case 3:e.vertexAttrib3fv(O.location,oe);break;case 4:e.vertexAttrib4fv(O.location,oe);break;default:e.vertexAttrib1fv(O.location,oe)}}}}A()}function U(){z();for(const l in i){const g=i[l];for(const D in g){const B=g[D];for(const G in B)b(B[G].object),delete B[G];delete g[D]}delete i[l]}}function E(l){if(i[l.id]===void 0)return;const g=i[l.id];for(const D in g){const B=g[D];for(const G in B)b(B[G].object),delete B[G];delete g[D]}delete i[l.id]}function C(l){for(const g in i){const D=i[g];if(D[l.id]===void 0)continue;const B=D[l.id];for(const G in B)b(B[G].object),delete B[G];delete D[l.id]}}function z(){f(),d=!0,o!==s&&(o=s,M(o.object))}function f(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:p,reset:z,resetDefaultState:f,dispose:U,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:c,disableUnusedAttributes:A}}function gl(e,n,t){let i;function s(M){i=M}function o(M,b){e.drawArrays(i,M,b),t.update(b,i,1)}function d(M,b,m){m!==0&&(e.drawArraysInstanced(i,M,b,m),t.update(b,i,m))}function p(M,b,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,M,0,b,0,m);let x=0;for(let y=0;y<m;y++)x+=b[y];t.update(x,i,1)}function R(M,b,m,_){if(m===0)return;const x=n.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<M.length;y++)d(M[y],b[y],_[y]);else{x.multiDrawArraysInstancedWEBGL(i,M,0,b,0,_,0,m);let y=0;for(let w=0;w<m;w++)y+=b[w]*_[w];t.update(y,i,1)}}this.setMode=s,this.render=o,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=R}function El(e,n,t,i){let s;function o(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const C=n.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function d(C){return!(C!==ze&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(C){const z=C===nn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(C!==pt&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==et&&!z)}function R(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let M=t.precision!==void 0?t.precision:"highp";const b=R(M);b!==M&&(console.warn("THREE.WebGLRenderer:",M,"not supported, using",b,"instead."),M=b);const m=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),U=y>0,E=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:R,textureFormatReadable:d,textureTypeReadable:p,precision:M,logarithmicDepthBuffer:m,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:c,maxAttributes:r,maxVertexUniforms:A,maxVaryings:v,maxFragmentUniforms:T,vertexTextures:U,maxSamples:E}}function Sl(e){const n=this;let t=null,i=0,s=!1,o=!1;const d=new Ya,p=new me,R={value:null,needsUpdate:!1};this.uniform=R,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const x=m.length!==0||_||i!==0||s;return s=_,i=m.length,x},this.beginShadows=function(){o=!0,b(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,_){t=b(m,_,0)},this.setState=function(m,_,x){const y=m.clippingPlanes,w=m.clipIntersection,c=m.clipShadows,r=e.get(m);if(!s||y===null||y.length===0||o&&!c)o?b(null):M();else{const A=o?0:i,v=A*4;let T=r.clippingState||null;R.value=T,T=b(y,_,v,x);for(let U=0;U!==v;++U)T[U]=t[U];r.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function M(){R.value!==t&&(R.value=t,R.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function b(m,_,x,y){const w=m!==null?m.length:0;let c=null;if(w!==0){if(c=R.value,y!==!0||c===null){const r=x+w*4,A=_.matrixWorldInverse;p.getNormalMatrix(A),(c===null||c.length<r)&&(c=new Float32Array(r));for(let v=0,T=x;v!==w;++v,T+=4)d.copy(m[v]).applyMatrix4(A,p),d.normal.toArray(c,T),c[T+3]=d.constant}R.value=c,R.needsUpdate=!0}return n.numPlanes=w,n.numIntersection=0,c}}function Ml(e){let n=new WeakMap;function t(d,p){return p===Xt?d.mapping=ht:p===Yt&&(d.mapping=st),d}function i(d){if(d&&d.isTexture){const p=d.mapping;if(p===Xt||p===Yt)if(n.has(d)){const R=n.get(d).texture;return t(R,d.mapping)}else{const R=d.image;if(R&&R.height>0){const M=new Ka(R.height);return M.fromEquirectangularTexture(e,d),n.set(d,M),d.addEventListener("dispose",s),t(M.texture,d.mapping)}else return null}}return d}function s(d){const p=d.target;p.removeEventListener("dispose",s);const R=n.get(p);R!==void 0&&(n.delete(p),R.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const ot=4,kn=[.125,.215,.35,.446,.526,.582],Je=20,Bt=new yo,Wn=new Re;let Gt=null,Ht=0,Vt=0,kt=!1;const Qe=(1+Math.sqrt(5))/2,it=1/Qe,zn=[new Se(-Qe,it,0),new Se(Qe,it,0),new Se(-it,0,Qe),new Se(it,0,Qe),new Se(0,Qe,-it),new Se(0,Qe,it),new Se(-1,1,-1),new Se(1,1,-1),new Se(-1,1,1),new Se(1,1,1)],Os=new Se;class Xn{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,s=100,o={}){const{size:d=256,position:p=Os}=o;Gt=this._renderer.getRenderTarget(),Ht=this._renderer.getActiveCubeFace(),Vt=this._renderer.getActiveMipmapLevel(),kt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const R=this._allocateTargets();return R.depthBuffer=!0,this._sceneToCubeUV(n,i,s,R,p),t>0&&this._blur(R,0,0,t),this._applyPMREM(R),this._cleanup(R),R}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Gt,Ht,Vt),this._renderer.xr.enabled=kt,n.scissorTest=!1,Et(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===ht||n.mapping===st?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Gt=this._renderer.getRenderTarget(),Ht=this._renderer.getActiveCubeFace(),Vt=this._renderer.getActiveMipmapLevel(),kt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rt,minFilter:rt,generateMipmaps:!1,type:nn,format:ze,colorSpace:an,depthBuffer:!1},s=Yn(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yn(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fs(o)),this._blurMaterial=Bs(o,n,t)}return s}_compileMaterial(n){const t=new Ke(this._lodPlanes[0],n);this._renderer.compile(t,Bt)}_sceneToCubeUV(n,t,i,s,o){const R=new xt(90,1,t,i),M=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(Wn),m.toneMapping=ft,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null));const w=new wi({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),c=new Ke(new di,w);let r=!1;const A=n.background;A?A.isColor&&(w.color.copy(A),n.background=null,r=!0):(w.color.copy(Wn),r=!0);for(let v=0;v<6;v++){const T=v%3;T===0?(R.up.set(0,M[v],0),R.position.set(o.x,o.y,o.z),R.lookAt(o.x+b[v],o.y,o.z)):T===1?(R.up.set(0,0,M[v]),R.position.set(o.x,o.y,o.z),R.lookAt(o.x,o.y+b[v],o.z)):(R.up.set(0,M[v],0),R.position.set(o.x,o.y,o.z),R.lookAt(o.x,o.y,o.z+b[v]));const U=this._cubeSize;Et(s,T*U,v>2?U:0,U,U),m.setRenderTarget(s),r&&m.render(c,R),m.render(n,R)}c.geometry.dispose(),c.material.dispose(),m.toneMapping=x,m.autoClear=_,n.background=A}_textureToCubeUV(n,t){const i=this._renderer,s=n.mapping===ht||n.mapping===st;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qn()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kn());const o=s?this._cubemapMaterial:this._equirectMaterial,d=new Ke(this._lodPlanes[0],o),p=o.uniforms;p.envMap.value=n;const R=this._cubeSize;Et(t,0,0,3*R,2*R),i.setRenderTarget(t),i.render(d,Bt)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const d=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),p=zn[(s-o-1)%zn.length];this._blur(n,o-1,o,d,p)}t.autoClear=i}_blur(n,t,i,s,o){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,s,"latitudinal",o),this._halfBlur(d,n,i,i,s,"longitudinal",o)}_halfBlur(n,t,i,s,o,d,p){const R=this._renderer,M=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const b=3,m=new Ke(this._lodPlanes[s],M),_=M.uniforms,x=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Je-1),w=o/y,c=isFinite(o)?1+Math.floor(b*w):Je;c>Je&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Je}`);const r=[];let A=0;for(let C=0;C<Je;++C){const z=C/w,f=Math.exp(-z*z/2);r.push(f),C===0?A+=f:C<c&&(A+=2*f)}for(let C=0;C<r.length;C++)r[C]=r[C]/A;_.envMap.value=n.texture,_.samples.value=c,_.weights.value=r,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:v}=this;_.dTheta.value=y,_.mipInt.value=v-i;const T=this._sizeLods[s],U=3*T*(s>v-ot?s-v+ot:0),E=4*(this._cubeSize-T);Et(t,U,E,3*T,2*T),R.setRenderTarget(t),R.render(m,Bt)}}function Fs(e){const n=[],t=[],i=[];let s=e;const o=e-ot+1+kn.length;for(let d=0;d<o;d++){const p=Math.pow(2,s);t.push(p);let R=1/p;d>e-ot?R=kn[d-e+ot-1]:d===0&&(R=0),i.push(R);const M=1/(p-2),b=-M,m=1+M,_=[b,b,m,b,m,m,b,b,m,m,b,m],x=6,y=6,w=3,c=2,r=1,A=new Float32Array(w*y*x),v=new Float32Array(c*y*x),T=new Float32Array(r*y*x);for(let E=0;E<x;E++){const C=E%3*2/3-1,z=E>2?0:-1,f=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];A.set(f,w*y*E),v.set(_,c*y*E);const l=[E,E,E,E,E,E];T.set(l,r*y*E)}const U=new mi;U.setAttribute("position",new Mt(A,w)),U.setAttribute("uv",new Mt(v,c)),U.setAttribute("faceIndex",new Mt(T,r)),n.push(U),s>ot&&s--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Yn(e,n,t){const i=new _t(e,n,t);return i.texture.mapping=Pt,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Et(e,n,t,i,s){e.viewport.set(n,t,i,s),e.scissor.set(n,t,i,s)}function Bs(e,n,t){const i=new Float32Array(Je),s=new Se(0,1,0);return new nt({name:"SphericalGaussianBlur",defines:{n:Je,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:on(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tt,depthTest:!1,depthWrite:!1})}function Kn(){return new nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:on(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tt,depthTest:!1,depthWrite:!1})}function qn(){return new nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:on(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tt,depthTest:!1,depthWrite:!1})}function on(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tl(e){let n=new WeakMap,t=null;function i(p){if(p&&p.isTexture){const R=p.mapping,M=R===Xt||R===Yt,b=R===ht||R===st;if(M||b){let m=n.get(p);const _=m!==void 0?m.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return t===null&&(t=new Xn(e)),m=M?t.fromEquirectangular(p,m):t.fromCubemap(p,m),m.texture.pmremVersion=p.pmremVersion,n.set(p,m),m.texture;if(m!==void 0)return m.texture;{const x=p.image;return M&&x&&x.height>0||b&&x&&s(x)?(t===null&&(t=new Xn(e)),m=M?t.fromEquirectangular(p):t.fromCubemap(p),m.texture.pmremVersion=p.pmremVersion,n.set(p,m),p.addEventListener("dispose",o),m.texture):null}}}return p}function s(p){let R=0;const M=6;for(let b=0;b<M;b++)p[b]!==void 0&&R++;return R===M}function o(p){const R=p.target;R.removeEventListener("dispose",o);const M=n.get(R);M!==void 0&&(n.delete(R),M.dispose())}function d(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function xl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return n[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ui("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Al(e,n,t,i){const s={},o=new WeakMap;function d(m){const _=m.target;_.index!==null&&n.remove(_.index);for(const y in _.attributes)n.remove(_.attributes[y]);_.removeEventListener("dispose",d),delete s[_.id];const x=o.get(_);x&&(n.remove(x),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function p(m,_){return s[_.id]===!0||(_.addEventListener("dispose",d),s[_.id]=!0,t.memory.geometries++),_}function R(m){const _=m.attributes;for(const x in _)n.update(_[x],e.ARRAY_BUFFER)}function M(m){const _=[],x=m.index,y=m.attributes.position;let w=0;if(x!==null){const A=x.array;w=x.version;for(let v=0,T=A.length;v<T;v+=3){const U=A[v+0],E=A[v+1],C=A[v+2];_.push(U,E,E,C,C,U)}}else if(y!==void 0){const A=y.array;w=y.version;for(let v=0,T=A.length/3-1;v<T;v+=3){const U=v+0,E=v+1,C=v+2;_.push(U,E,E,C,C,U)}}else return;const c=new(Li(_)?Pi:Di)(_,1);c.version=w;const r=o.get(m);r&&n.remove(r),o.set(m,c)}function b(m){const _=o.get(m);if(_){const x=m.index;x!==null&&_.version<x.version&&M(m)}else M(m);return o.get(m)}return{get:p,update:R,getWireframeAttribute:b}}function Rl(e,n,t){let i;function s(_){i=_}let o,d;function p(_){o=_.type,d=_.bytesPerElement}function R(_,x){e.drawElements(i,x,o,_*d),t.update(x,i,1)}function M(_,x,y){y!==0&&(e.drawElementsInstanced(i,x,o,_*d,y),t.update(x,i,y))}function b(_,x,y){if(y===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,_,0,y);let c=0;for(let r=0;r<y;r++)c+=x[r];t.update(c,i,1)}function m(_,x,y,w){if(y===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let r=0;r<_.length;r++)M(_[r]/d,x[r],w[r]);else{c.multiDrawElementsInstancedWEBGL(i,x,0,o,_,0,w,0,y);let r=0;for(let A=0;A<y;A++)r+=x[A]*w[A];t.update(r,i,1)}}this.setMode=s,this.setIndex=p,this.render=R,this.renderInstances=M,this.renderMultiDraw=b,this.renderMultiDrawInstances=m}function bl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,d,p){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=p*(o/3);break;case e.LINES:t.lines+=p*(o/2);break;case e.LINE_STRIP:t.lines+=p*(o-1);break;case e.LINE_LOOP:t.lines+=p*o;break;case e.POINTS:t.points+=p*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Cl(e,n,t){const i=new WeakMap,s=new Xe;function o(d,p,R){const M=d.morphTargetInfluences,b=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,m=b!==void 0?b.length:0;let _=i.get(p);if(_===void 0||_.count!==m){let f=function(){C.dispose(),i.delete(p),p.removeEventListener("dispose",f)};_!==void 0&&_.texture.dispose();const x=p.morphAttributes.position!==void 0,y=p.morphAttributes.normal!==void 0,w=p.morphAttributes.color!==void 0,c=p.morphAttributes.position||[],r=p.morphAttributes.normal||[],A=p.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),w===!0&&(v=3);let T=p.attributes.position.count*v,U=1;T>n.maxTextureSize&&(U=Math.ceil(T/n.maxTextureSize),T=n.maxTextureSize);const E=new Float32Array(T*U*4*m),C=new vi(E,T,U,m);C.type=et,C.needsUpdate=!0;const z=v*4;for(let l=0;l<m;l++){const g=c[l],D=r[l],B=A[l],G=T*U*4*l;for(let k=0;k<g.count;k++){const F=k*z;x===!0&&(s.fromBufferAttribute(g,k),E[G+F+0]=s.x,E[G+F+1]=s.y,E[G+F+2]=s.z,E[G+F+3]=0),y===!0&&(s.fromBufferAttribute(D,k),E[G+F+4]=s.x,E[G+F+5]=s.y,E[G+F+6]=s.z,E[G+F+7]=0),w===!0&&(s.fromBufferAttribute(B,k),E[G+F+8]=s.x,E[G+F+9]=s.y,E[G+F+10]=s.z,E[G+F+11]=B.itemSize===4?s.w:1)}}_={count:m,texture:C,size:new Fe(T,U)},i.set(p,_),p.addEventListener("dispose",f)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)R.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let x=0;for(let w=0;w<M.length;w++)x+=M[w];const y=p.morphTargetsRelative?1:1-x;R.getUniforms().setValue(e,"morphTargetBaseInfluence",y),R.getUniforms().setValue(e,"morphTargetInfluences",M)}R.getUniforms().setValue(e,"morphTargetsTexture",_.texture,t),R.getUniforms().setValue(e,"morphTargetsTextureSize",_.size)}return{update:o}}function wl(e,n,t,i){let s=new WeakMap;function o(R){const M=i.render.frame,b=R.geometry,m=n.get(R,b);if(s.get(m)!==M&&(n.update(m),s.set(m,M)),R.isInstancedMesh&&(R.hasEventListener("dispose",p)===!1&&R.addEventListener("dispose",p),s.get(R)!==M&&(t.update(R.instanceMatrix,e.ARRAY_BUFFER),R.instanceColor!==null&&t.update(R.instanceColor,e.ARRAY_BUFFER),s.set(R,M))),R.isSkinnedMesh){const _=R.skeleton;s.get(_)!==M&&(_.update(),s.set(_,M))}return m}function d(){s=new WeakMap}function p(R){const M=R.target;M.removeEventListener("dispose",p),t.remove(M.instanceMatrix),M.instanceColor!==null&&t.remove(M.instanceColor)}return{update:o,dispose:d}}const Ai=new yi,$n=new Ti(1,1),Ri=new vi,bi=new Ii,Ci=new qa,jn=[],Zn=[],Qn=new Float32Array(16),Jn=new Float32Array(9),ei=new Float32Array(4);function ct(e,n,t){const i=e[0];if(i<=0||i>0)return e;const s=n*t;let o=jn[s];if(o===void 0&&(o=new Float32Array(s),jn[s]=o),n!==0){i.toArray(o,0);for(let d=1,p=0;d!==n;++d)p+=t,e[d].toArray(o,p)}return o}function we(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function Ue(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Dt(e,n){let t=Zn[n];t===void 0&&(t=new Int32Array(n),Zn[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Gs(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Hs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(we(t,n))return;e.uniform2fv(this.addr,n),Ue(t,n)}}function Vs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(we(t,n))return;e.uniform3fv(this.addr,n),Ue(t,n)}}function ks(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(we(t,n))return;e.uniform4fv(this.addr,n),Ue(t,n)}}function Ws(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(we(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),Ue(t,n)}else{if(we(t,i))return;ei.set(i),e.uniformMatrix2fv(this.addr,!1,ei),Ue(t,i)}}function zs(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(we(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),Ue(t,n)}else{if(we(t,i))return;Jn.set(i),e.uniformMatrix3fv(this.addr,!1,Jn),Ue(t,i)}}function Xs(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(we(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),Ue(t,n)}else{if(we(t,i))return;Qn.set(i),e.uniformMatrix4fv(this.addr,!1,Qn),Ue(t,i)}}function Ys(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Ks(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(we(t,n))return;e.uniform2iv(this.addr,n),Ue(t,n)}}function qs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(we(t,n))return;e.uniform3iv(this.addr,n),Ue(t,n)}}function $s(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(we(t,n))return;e.uniform4iv(this.addr,n),Ue(t,n)}}function js(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Zs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(we(t,n))return;e.uniform2uiv(this.addr,n),Ue(t,n)}}function Qs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(we(t,n))return;e.uniform3uiv(this.addr,n),Ue(t,n)}}function Js(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(we(t,n))return;e.uniform4uiv(this.addr,n),Ue(t,n)}}function ec(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let o;this.type===e.SAMPLER_2D_SHADOW?($n.compareFunction=gi,o=$n):o=Ai,t.setTexture2D(n||o,s)}function tc(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(n||bi,s)}function nc(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(n||Ci,s)}function ic(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(n||Ri,s)}function ac(e){switch(e){case 5126:return Gs;case 35664:return Hs;case 35665:return Vs;case 35666:return ks;case 35674:return Ws;case 35675:return zs;case 35676:return Xs;case 5124:case 35670:return Ys;case 35667:case 35671:return Ks;case 35668:case 35672:return qs;case 35669:case 35673:return $s;case 5125:return js;case 36294:return Zs;case 36295:return Qs;case 36296:return Js;case 35678:case 36198:case 36298:case 36306:case 35682:return ec;case 35679:case 36299:case 36307:return tc;case 35680:case 36300:case 36308:case 36293:return nc;case 36289:case 36303:case 36311:case 36292:return ic}}function rc(e,n){e.uniform1fv(this.addr,n)}function oc(e,n){const t=ct(n,this.size,2);e.uniform2fv(this.addr,t)}function sc(e,n){const t=ct(n,this.size,3);e.uniform3fv(this.addr,t)}function cc(e,n){const t=ct(n,this.size,4);e.uniform4fv(this.addr,t)}function lc(e,n){const t=ct(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function uc(e,n){const t=ct(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function fc(e,n){const t=ct(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function dc(e,n){e.uniform1iv(this.addr,n)}function pc(e,n){e.uniform2iv(this.addr,n)}function hc(e,n){e.uniform3iv(this.addr,n)}function _c(e,n){e.uniform4iv(this.addr,n)}function mc(e,n){e.uniform1uiv(this.addr,n)}function vc(e,n){e.uniform2uiv(this.addr,n)}function gc(e,n){e.uniform3uiv(this.addr,n)}function Ec(e,n){e.uniform4uiv(this.addr,n)}function Sc(e,n,t){const i=this.cache,s=n.length,o=Dt(t,s);we(i,o)||(e.uniform1iv(this.addr,o),Ue(i,o));for(let d=0;d!==s;++d)t.setTexture2D(n[d]||Ai,o[d])}function Mc(e,n,t){const i=this.cache,s=n.length,o=Dt(t,s);we(i,o)||(e.uniform1iv(this.addr,o),Ue(i,o));for(let d=0;d!==s;++d)t.setTexture3D(n[d]||bi,o[d])}function Tc(e,n,t){const i=this.cache,s=n.length,o=Dt(t,s);we(i,o)||(e.uniform1iv(this.addr,o),Ue(i,o));for(let d=0;d!==s;++d)t.setTextureCube(n[d]||Ci,o[d])}function xc(e,n,t){const i=this.cache,s=n.length,o=Dt(t,s);we(i,o)||(e.uniform1iv(this.addr,o),Ue(i,o));for(let d=0;d!==s;++d)t.setTexture2DArray(n[d]||Ri,o[d])}function Ac(e){switch(e){case 5126:return rc;case 35664:return oc;case 35665:return sc;case 35666:return cc;case 35674:return lc;case 35675:return uc;case 35676:return fc;case 5124:case 35670:return dc;case 35667:case 35671:return pc;case 35668:case 35672:return hc;case 35669:case 35673:return _c;case 5125:return mc;case 36294:return vc;case 36295:return gc;case 36296:return Ec;case 35678:case 36198:case 36298:case 36306:case 35682:return Sc;case 35679:case 36299:case 36307:return Mc;case 35680:case 36300:case 36308:case 36293:return Tc;case 36289:case 36303:case 36311:case 36292:return xc}}class Rc{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ac(t.type)}}class bc{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ac(t.type)}}class Cc{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const s=this.seq;for(let o=0,d=s.length;o!==d;++o){const p=s[o];p.setValue(n,t[p.id],i)}}}const Wt=/(\w+)(\])?(\[|\.)?/g;function ti(e,n){e.seq.push(n),e.map[n.id]=n}function wc(e,n,t){const i=e.name,s=i.length;for(Wt.lastIndex=0;;){const o=Wt.exec(i),d=Wt.lastIndex;let p=o[1];const R=o[2]==="]",M=o[3];if(R&&(p=p|0),M===void 0||M==="["&&d+2===s){ti(t,M===void 0?new Rc(p,e,n):new bc(p,e,n));break}else{let m=t.map[p];m===void 0&&(m=new Cc(p),ti(t,m)),t=m}}}class Uc{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=n.getActiveUniform(t,s),d=n.getUniformLocation(t,o.name);wc(o,d,this)}}setValue(n,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(n,i,s)}setOptional(n,t,i){const s=t[i];s!==void 0&&this.setValue(n,i,s)}static upload(n,t,i,s){for(let o=0,d=t.length;o!==d;++o){const p=t[o],R=i[p.id];R.needsUpdate!==!1&&p.setValue(n,R.value,s)}}static seqWithValue(n,t){const i=[];for(let s=0,o=n.length;s!==o;++s){const d=n[s];d.id in t&&i.push(d)}return i}}function ni(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Pc=37297;let Dc=0;function Lc(e,n){const t=e.split(`
`),i=[],s=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let d=s;d<o;d++){const p=d+1;i.push(`${p===n?">":" "} ${p}: ${t[d]}`)}return i.join(`
`)}const ii=new me;function Ic(e){ye._getMatrix(ii,ye.workingColorSpace,e);const n=`mat3( ${ii.elements.map(t=>t.toFixed(4))} )`;switch(ye.getTransfer(e)){case Si:return[n,"LinearTransferOETF"];case Me:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ai(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),o=(e.getShaderInfoLog(n)||"").trim();if(i&&o==="")return"";const d=/ERROR: 0:(\d+)/.exec(o);if(d){const p=parseInt(d[1]);return t.toUpperCase()+`

`+o+`

`+Lc(e.getShaderSource(n),p)}else return o}function yc(e,n){const t=Ic(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nc(e,n){let t;switch(n){case ki:t="Linear";break;case Vi:t="Reinhard";break;case Hi:t="Cineon";break;case Gi:t="ACESFilmic";break;case Bi:t="AgX";break;case Fi:t="Neutral";break;case Oi:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const St=new Se;function Oc(){ye.getLuminanceCoefficients(St);const e=St.x.toFixed(4),n=St.y.toFixed(4),t=St.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fc(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ut).join(`
`)}function Bc(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Gc(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=e.getActiveAttrib(n,s),d=o.name;let p=1;o.type===e.FLOAT_MAT2&&(p=2),o.type===e.FLOAT_MAT3&&(p=3),o.type===e.FLOAT_MAT4&&(p=4),t[d]={type:o.type,location:e.getAttribLocation(n,d),locationSize:p}}return t}function ut(e){return e!==""}function ri(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function oi(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Hc=/^[ \t]*#include +<([\w\d./]+)>/gm;function tn(e){return e.replace(Hc,kc)}const Vc=new Map;function kc(e,n){let t=fe[n];if(t===void 0){const i=Vc.get(n);if(i!==void 0)t=fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return tn(t)}const Wc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function si(e){return e.replace(Wc,zc)}function zc(e,n,t,i){let s="";for(let o=parseInt(n);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ci(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Xc(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ei?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Ni?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===We&&(n="SHADOWMAP_TYPE_VSM"),n}function Yc(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ht:case st:n="ENVMAP_TYPE_CUBE";break;case Pt:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Kc(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case st:n="ENVMAP_MODE_REFRACTION";break}return n}function qc(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Xi:n="ENVMAP_BLENDING_MULTIPLY";break;case zi:n="ENVMAP_BLENDING_MIX";break;case Wi:n="ENVMAP_BLENDING_ADD";break}return n}function $c(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jc(e,n,t,i){const s=e.getContext(),o=t.defines;let d=t.vertexShader,p=t.fragmentShader;const R=Xc(t),M=Yc(t),b=Kc(t),m=qc(t),_=$c(t),x=Fc(t),y=Bc(o),w=s.createProgram();let c,r,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ut).join(`
`),c.length>0&&(c+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ut).join(`
`),r.length>0&&(r+=`
`)):(c=[ci(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ut).join(`
`),r=[ci(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.envMap?"#define "+b:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ft?"#define TONE_MAPPING":"",t.toneMapping!==ft?fe.tonemapping_pars_fragment:"",t.toneMapping!==ft?Nc("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,yc("linearToOutputTexel",t.outputColorSpace),Oc(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ut).join(`
`)),d=tn(d),d=ri(d,t),d=oi(d,t),p=tn(p),p=ri(p,t),p=oi(p,t),d=si(d),p=si(p),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,r=["#define varying in",t.glslVersion===cn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const v=A+c+d,T=A+r+p,U=ni(s,s.VERTEX_SHADER,v),E=ni(s,s.FRAGMENT_SHADER,T);s.attachShader(w,U),s.attachShader(w,E),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function C(g){if(e.debug.checkShaderErrors){const D=s.getProgramInfoLog(w)||"",B=s.getShaderInfoLog(U)||"",G=s.getShaderInfoLog(E)||"",k=D.trim(),F=B.trim(),Z=G.trim();let O=!0,ne=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(O=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,w,U,E);else{const oe=ai(s,U,"vertex"),he=ai(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+g.name+`
Material Type: `+g.type+`

Program Info Log: `+k+`
`+oe+`
`+he)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||Z==="")&&(ne=!1);ne&&(g.diagnostics={runnable:O,programLog:k,vertexShader:{log:F,prefix:c},fragmentShader:{log:Z,prefix:r}})}s.deleteShader(U),s.deleteShader(E),z=new Uc(s,w),f=Gc(s,w)}let z;this.getUniforms=function(){return z===void 0&&C(this),z};let f;this.getAttributes=function(){return f===void 0&&C(this),f};let l=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return l===!1&&(l=s.getProgramParameter(w,Pc)),l},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dc++,this.cacheKey=n,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=E,this}let Zc=0;class Qc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(s)===!1&&(d.add(s),s.usedTimes++),d.has(o)===!1&&(d.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Jc(n),t.set(n,i)),i}}class Jc{constructor(n){this.id=Zc++,this.code=n,this.usedTimes=0}}function Ul(e,n,t,i,s,o,d){const p=new $i,R=new Qc,M=new Set,b=[],m=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(f){return M.add(f),f===0?"uv":`uv${f}`}function c(f,l,g,D,B){const G=D.fog,k=B.geometry,F=f.isMeshStandardMaterial?D.environment:null,Z=(f.isMeshStandardMaterial?t:n).get(f.envMap||F),O=Z&&Z.mapping===Pt?Z.image.height:null,ne=y[f.type];f.precision!==null&&(x=s.getMaxPrecision(f.precision),x!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",x,"instead."));const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,he=oe!==void 0?oe.length:0;let Te=0;k.morphAttributes.position!==void 0&&(Te=1),k.morphAttributes.normal!==void 0&&(Te=2),k.morphAttributes.color!==void 0&&(Te=3);let Le,Pe,Ce,I;if(ne){const Ee=ke[ne];Le=Ee.vertexShader,Pe=Ee.fragmentShader}else Le=f.vertexShader,Pe=f.fragmentShader,R.update(f),Ce=R.getVertexShaderID(f),I=R.getFragmentShaderID(f);const V=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),de=B.isInstancedMesh===!0,ie=B.isBatchedMesh===!0,ge=!!f.map,Be=!!f.matcap,ve=!!Z,be=!!f.aoMap,xe=!!f.lightMap,_e=!!f.bumpMap,Ie=!!f.normalMap,Ge=!!f.displacementMap,De=!!f.emissiveMap,He=!!f.metalnessMap,Ve=!!f.roughnessMap,Ne=f.anisotropy>0,u=f.clearcoat>0,a=f.dispersion>0,S=f.iridescence>0,L=f.sheen>0,H=f.transmission>0,P=Ne&&!!f.anisotropyMap,ae=u&&!!f.clearcoatMap,q=u&&!!f.clearcoatNormalMap,se=u&&!!f.clearcoatRoughnessMap,le=S&&!!f.iridescenceMap,X=S&&!!f.iridescenceThicknessMap,j=L&&!!f.sheenColorMap,ce=L&&!!f.sheenRoughnessMap,re=!!f.specularMap,Q=!!f.specularColorMap,pe=!!f.specularIntensityMap,h=H&&!!f.transmissionMap,$=H&&!!f.thicknessMap,Y=!!f.gradientMap,J=!!f.alphaMap,W=f.alphaTest>0,N=!!f.alphaHash,te=!!f.extensions;let ue=ft;f.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ue=e.toneMapping);const Ae={shaderID:ne,shaderType:f.type,shaderName:f.name,vertexShader:Le,fragmentShader:Pe,defines:f.defines,customVertexShaderID:Ce,customFragmentShaderID:I,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:x,batching:ie,batchingColor:ie&&B._colorsTexture!==null,instancing:de,instancingColor:de&&B.instanceColor!==null,instancingMorph:de&&B.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:V===null?e.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:an,alphaToCoverage:!!f.alphaToCoverage,map:ge,matcap:Be,envMap:ve,envMapMode:ve&&Z.mapping,envMapCubeUVHeight:O,aoMap:be,lightMap:xe,bumpMap:_e,normalMap:Ie,displacementMap:_&&Ge,emissiveMap:De,normalMapObjectSpace:Ie&&f.normalMapType===qi,normalMapTangentSpace:Ie&&f.normalMapType===Ki,metalnessMap:He,roughnessMap:Ve,anisotropy:Ne,anisotropyMap:P,clearcoat:u,clearcoatMap:ae,clearcoatNormalMap:q,clearcoatRoughnessMap:se,dispersion:a,iridescence:S,iridescenceMap:le,iridescenceThicknessMap:X,sheen:L,sheenColorMap:j,sheenRoughnessMap:ce,specularMap:re,specularColorMap:Q,specularIntensityMap:pe,transmission:H,transmissionMap:h,thicknessMap:$,gradientMap:Y,opaque:f.transparent===!1&&f.blending===Tt&&f.alphaToCoverage===!1,alphaMap:J,alphaTest:W,alphaHash:N,combine:f.combine,mapUv:ge&&w(f.map.channel),aoMapUv:be&&w(f.aoMap.channel),lightMapUv:xe&&w(f.lightMap.channel),bumpMapUv:_e&&w(f.bumpMap.channel),normalMapUv:Ie&&w(f.normalMap.channel),displacementMapUv:Ge&&w(f.displacementMap.channel),emissiveMapUv:De&&w(f.emissiveMap.channel),metalnessMapUv:He&&w(f.metalnessMap.channel),roughnessMapUv:Ve&&w(f.roughnessMap.channel),anisotropyMapUv:P&&w(f.anisotropyMap.channel),clearcoatMapUv:ae&&w(f.clearcoatMap.channel),clearcoatNormalMapUv:q&&w(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&w(f.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&w(f.iridescenceMap.channel),iridescenceThicknessMapUv:X&&w(f.iridescenceThicknessMap.channel),sheenColorMapUv:j&&w(f.sheenColorMap.channel),sheenRoughnessMapUv:ce&&w(f.sheenRoughnessMap.channel),specularMapUv:re&&w(f.specularMap.channel),specularColorMapUv:Q&&w(f.specularColorMap.channel),specularIntensityMapUv:pe&&w(f.specularIntensityMap.channel),transmissionMapUv:h&&w(f.transmissionMap.channel),thicknessMapUv:$&&w(f.thicknessMap.channel),alphaMapUv:J&&w(f.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ie||Ne),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(ge||J),fog:!!G,useFog:f.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ee,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Te,numDirLights:l.directional.length,numPointLights:l.point.length,numSpotLights:l.spot.length,numSpotLightMaps:l.spotLightMap.length,numRectAreaLights:l.rectArea.length,numHemiLights:l.hemi.length,numDirLightShadows:l.directionalShadowMap.length,numPointLightShadows:l.pointShadowMap.length,numSpotLightShadows:l.spotShadowMap.length,numSpotLightShadowsWithMaps:l.numSpotLightShadowsWithMaps,numLightProbes:l.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&g.length>0,shadowMapType:e.shadowMap.type,toneMapping:ue,decodeVideoTexture:ge&&f.map.isVideoTexture===!0&&ye.getTransfer(f.map.colorSpace)===Me,decodeVideoTextureEmissive:De&&f.emissiveMap.isVideoTexture===!0&&ye.getTransfer(f.emissiveMap.colorSpace)===Me,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Rt,flipSided:f.side===Ye,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:te&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&f.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ae.vertexUv1s=M.has(1),Ae.vertexUv2s=M.has(2),Ae.vertexUv3s=M.has(3),M.clear(),Ae}function r(f){const l=[];if(f.shaderID?l.push(f.shaderID):(l.push(f.customVertexShaderID),l.push(f.customFragmentShaderID)),f.defines!==void 0)for(const g in f.defines)l.push(g),l.push(f.defines[g]);return f.isRawShaderMaterial===!1&&(A(l,f),v(l,f),l.push(e.outputColorSpace)),l.push(f.customProgramCacheKey),l.join()}function A(f,l){f.push(l.precision),f.push(l.outputColorSpace),f.push(l.envMapMode),f.push(l.envMapCubeUVHeight),f.push(l.mapUv),f.push(l.alphaMapUv),f.push(l.lightMapUv),f.push(l.aoMapUv),f.push(l.bumpMapUv),f.push(l.normalMapUv),f.push(l.displacementMapUv),f.push(l.emissiveMapUv),f.push(l.metalnessMapUv),f.push(l.roughnessMapUv),f.push(l.anisotropyMapUv),f.push(l.clearcoatMapUv),f.push(l.clearcoatNormalMapUv),f.push(l.clearcoatRoughnessMapUv),f.push(l.iridescenceMapUv),f.push(l.iridescenceThicknessMapUv),f.push(l.sheenColorMapUv),f.push(l.sheenRoughnessMapUv),f.push(l.specularMapUv),f.push(l.specularColorMapUv),f.push(l.specularIntensityMapUv),f.push(l.transmissionMapUv),f.push(l.thicknessMapUv),f.push(l.combine),f.push(l.fogExp2),f.push(l.sizeAttenuation),f.push(l.morphTargetsCount),f.push(l.morphAttributeCount),f.push(l.numDirLights),f.push(l.numPointLights),f.push(l.numSpotLights),f.push(l.numSpotLightMaps),f.push(l.numHemiLights),f.push(l.numRectAreaLights),f.push(l.numDirLightShadows),f.push(l.numPointLightShadows),f.push(l.numSpotLightShadows),f.push(l.numSpotLightShadowsWithMaps),f.push(l.numLightProbes),f.push(l.shadowMapType),f.push(l.toneMapping),f.push(l.numClippingPlanes),f.push(l.numClipIntersection),f.push(l.depthPacking)}function v(f,l){p.disableAll(),l.supportsVertexTextures&&p.enable(0),l.instancing&&p.enable(1),l.instancingColor&&p.enable(2),l.instancingMorph&&p.enable(3),l.matcap&&p.enable(4),l.envMap&&p.enable(5),l.normalMapObjectSpace&&p.enable(6),l.normalMapTangentSpace&&p.enable(7),l.clearcoat&&p.enable(8),l.iridescence&&p.enable(9),l.alphaTest&&p.enable(10),l.vertexColors&&p.enable(11),l.vertexAlphas&&p.enable(12),l.vertexUv1s&&p.enable(13),l.vertexUv2s&&p.enable(14),l.vertexUv3s&&p.enable(15),l.vertexTangents&&p.enable(16),l.anisotropy&&p.enable(17),l.alphaHash&&p.enable(18),l.batching&&p.enable(19),l.dispersion&&p.enable(20),l.batchingColor&&p.enable(21),l.gradientMap&&p.enable(22),f.push(p.mask),p.disableAll(),l.fog&&p.enable(0),l.useFog&&p.enable(1),l.flatShading&&p.enable(2),l.logarithmicDepthBuffer&&p.enable(3),l.reversedDepthBuffer&&p.enable(4),l.skinning&&p.enable(5),l.morphTargets&&p.enable(6),l.morphNormals&&p.enable(7),l.morphColors&&p.enable(8),l.premultipliedAlpha&&p.enable(9),l.shadowMapEnabled&&p.enable(10),l.doubleSided&&p.enable(11),l.flipSided&&p.enable(12),l.useDepthPacking&&p.enable(13),l.dithering&&p.enable(14),l.transmission&&p.enable(15),l.sheen&&p.enable(16),l.opaque&&p.enable(17),l.pointsUvs&&p.enable(18),l.decodeVideoTexture&&p.enable(19),l.decodeVideoTextureEmissive&&p.enable(20),l.alphaToCoverage&&p.enable(21),f.push(p.mask)}function T(f){const l=y[f.type];let g;if(l){const D=ke[l];g=Yi.clone(D.uniforms)}else g=f.uniforms;return g}function U(f,l){let g;for(let D=0,B=b.length;D<B;D++){const G=b[D];if(G.cacheKey===l){g=G,++g.usedTimes;break}}return g===void 0&&(g=new jc(e,l,f,o),b.push(g)),g}function E(f){if(--f.usedTimes===0){const l=b.indexOf(f);b[l]=b[b.length-1],b.pop(),f.destroy()}}function C(f){R.remove(f)}function z(){R.dispose()}return{getParameters:c,getProgramCacheKey:r,getUniforms:T,acquireProgram:U,releaseProgram:E,releaseShaderCache:C,programs:b,dispose:z}}function Pl(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let p=e.get(d);return p===void 0&&(p={},e.set(d,p)),p}function i(d){e.delete(d)}function s(d,p,R){e.get(d)[p]=R}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:s,dispose:o}}function el(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function li(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ui(){const e=[];let n=0;const t=[],i=[],s=[];function o(){n=0,t.length=0,i.length=0,s.length=0}function d(m,_,x,y,w,c){let r=e[n];return r===void 0?(r={id:m.id,object:m,geometry:_,material:x,groupOrder:y,renderOrder:m.renderOrder,z:w,group:c},e[n]=r):(r.id=m.id,r.object=m,r.geometry=_,r.material=x,r.groupOrder=y,r.renderOrder=m.renderOrder,r.z=w,r.group=c),n++,r}function p(m,_,x,y,w,c){const r=d(m,_,x,y,w,c);x.transmission>0?i.push(r):x.transparent===!0?s.push(r):t.push(r)}function R(m,_,x,y,w,c){const r=d(m,_,x,y,w,c);x.transmission>0?i.unshift(r):x.transparent===!0?s.unshift(r):t.unshift(r)}function M(m,_){t.length>1&&t.sort(m||el),i.length>1&&i.sort(_||li),s.length>1&&s.sort(_||li)}function b(){for(let m=n,_=e.length;m<_;m++){const x=e[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:p,unshift:R,finish:b,sort:M}}function Dl(){let e=new WeakMap;function n(i,s){const o=e.get(i);let d;return o===void 0?(d=new ui,e.set(i,[d])):s>=o.length?(d=new ui,o.push(d)):d=o[s],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function tl(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Se,color:new Re};break;case"SpotLight":t={position:new Se,direction:new Se,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Se,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Se,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new Se,halfWidth:new Se,halfHeight:new Se};break}return e[n.id]=t,t}}}function nl(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let il=0;function al(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function rl(e){const n=new tl,t=nl(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let M=0;M<9;M++)i.probe.push(new Se);const s=new Se,o=new At,d=new At;function p(M){let b=0,m=0,_=0;for(let f=0;f<9;f++)i.probe[f].set(0,0,0);let x=0,y=0,w=0,c=0,r=0,A=0,v=0,T=0,U=0,E=0,C=0;M.sort(al);for(let f=0,l=M.length;f<l;f++){const g=M[f],D=g.color,B=g.intensity,G=g.distance,k=g.shadow&&g.shadow.map?g.shadow.map.texture:null;if(g.isAmbientLight)b+=D.r*B,m+=D.g*B,_+=D.b*B;else if(g.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(g.sh.coefficients[F],B);C++}else if(g.isDirectionalLight){const F=n.get(g);if(F.color.copy(g.color).multiplyScalar(g.intensity),g.castShadow){const Z=g.shadow,O=t.get(g);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,i.directionalShadow[x]=O,i.directionalShadowMap[x]=k,i.directionalShadowMatrix[x]=g.shadow.matrix,A++}i.directional[x]=F,x++}else if(g.isSpotLight){const F=n.get(g);F.position.setFromMatrixPosition(g.matrixWorld),F.color.copy(D).multiplyScalar(B),F.distance=G,F.coneCos=Math.cos(g.angle),F.penumbraCos=Math.cos(g.angle*(1-g.penumbra)),F.decay=g.decay,i.spot[w]=F;const Z=g.shadow;if(g.map&&(i.spotLightMap[U]=g.map,U++,Z.updateMatrices(g),g.castShadow&&E++),i.spotLightMatrix[w]=Z.matrix,g.castShadow){const O=t.get(g);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,i.spotShadow[w]=O,i.spotShadowMap[w]=k,T++}w++}else if(g.isRectAreaLight){const F=n.get(g);F.color.copy(D).multiplyScalar(B),F.halfWidth.set(g.width*.5,0,0),F.halfHeight.set(0,g.height*.5,0),i.rectArea[c]=F,c++}else if(g.isPointLight){const F=n.get(g);if(F.color.copy(g.color).multiplyScalar(g.intensity),F.distance=g.distance,F.decay=g.decay,g.castShadow){const Z=g.shadow,O=t.get(g);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,O.shadowCameraNear=Z.camera.near,O.shadowCameraFar=Z.camera.far,i.pointShadow[y]=O,i.pointShadowMap[y]=k,i.pointShadowMatrix[y]=g.shadow.matrix,v++}i.point[y]=F,y++}else if(g.isHemisphereLight){const F=n.get(g);F.skyColor.copy(g.color).multiplyScalar(B),F.groundColor.copy(g.groundColor).multiplyScalar(B),i.hemi[r]=F,r++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=K.LTC_FLOAT_1,i.rectAreaLTC2=K.LTC_FLOAT_2):(i.rectAreaLTC1=K.LTC_HALF_1,i.rectAreaLTC2=K.LTC_HALF_2)),i.ambient[0]=b,i.ambient[1]=m,i.ambient[2]=_;const z=i.hash;(z.directionalLength!==x||z.pointLength!==y||z.spotLength!==w||z.rectAreaLength!==c||z.hemiLength!==r||z.numDirectionalShadows!==A||z.numPointShadows!==v||z.numSpotShadows!==T||z.numSpotMaps!==U||z.numLightProbes!==C)&&(i.directional.length=x,i.spot.length=w,i.rectArea.length=c,i.point.length=y,i.hemi.length=r,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=T+U-E,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,z.directionalLength=x,z.pointLength=y,z.spotLength=w,z.rectAreaLength=c,z.hemiLength=r,z.numDirectionalShadows=A,z.numPointShadows=v,z.numSpotShadows=T,z.numSpotMaps=U,z.numLightProbes=C,i.version=il++)}function R(M,b){let m=0,_=0,x=0,y=0,w=0;const c=b.matrixWorldInverse;for(let r=0,A=M.length;r<A;r++){const v=M[r];if(v.isDirectionalLight){const T=i.directional[m];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),m++}else if(v.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),x++}else if(v.isRectAreaLight){const T=i.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(c),d.identity(),o.copy(v.matrixWorld),o.premultiply(c),d.extractRotation(o),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(d),T.halfHeight.applyMatrix4(d),y++}else if(v.isPointLight){const T=i.point[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(c),_++}else if(v.isHemisphereLight){const T=i.hemi[w];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(c),w++}}}return{setup:p,setupView:R,state:i}}function fi(e){const n=new rl(e),t=[],i=[];function s(b){M.camera=b,t.length=0,i.length=0}function o(b){t.push(b)}function d(b){i.push(b)}function p(){n.setup(t)}function R(b){n.setupView(t,b)}const M={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:s,state:M,setupLights:p,setupLightsView:R,pushLight:o,pushShadow:d}}function Ll(e){let n=new WeakMap;function t(s,o=0){const d=n.get(s);let p;return d===void 0?(p=new fi(e),n.set(s,[p])):o>=d.length?(p=new fi(e),d.push(p)):p=d[o],p}function i(){n=new WeakMap}return{get:t,dispose:i}}const ol=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,sl=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Il(e,n,t){let i=new $a;const s=new Fe,o=new Fe,d=new Xe,p=new ja({depthPacking:ji}),R=new Za,M={},b=t.maxTextureSize,m={[zt]:Ye,[Ye]:zt,[Rt]:Rt},_=new nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:ol,fragmentShader:sl}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const y=new mi;y.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ke(y,_),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ei;let r=this.type;this.render=function(E,C,z){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||E.length===0)return;const f=e.getRenderTarget(),l=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),D=e.state;D.setBlending(tt),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=r!==We&&this.type===We,G=r===We&&this.type!==We;for(let k=0,F=E.length;k<F;k++){const Z=E[k],O=Z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ne=O.getFrameExtents();if(s.multiply(ne),o.copy(O.mapSize),(s.x>b||s.y>b)&&(s.x>b&&(o.x=Math.floor(b/ne.x),s.x=o.x*ne.x,O.mapSize.x=o.x),s.y>b&&(o.y=Math.floor(b/ne.y),s.y=o.y*ne.y,O.mapSize.y=o.y)),O.map===null||B===!0||G===!0){const he=this.type!==We?{minFilter:dt,magFilter:dt}:{};O.map!==null&&O.map.dispose(),O.map=new _t(s.x,s.y,he),O.map.texture.name=Z.name+".shadowMap",O.camera.updateProjectionMatrix()}e.setRenderTarget(O.map),e.clear();const oe=O.getViewportCount();for(let he=0;he<oe;he++){const Te=O.getViewport(he);d.set(o.x*Te.x,o.y*Te.y,o.x*Te.z,o.y*Te.w),D.viewport(d),O.updateMatrices(Z,he),i=O.getFrustum(),T(C,z,O.camera,Z,this.type)}O.isPointLightShadow!==!0&&this.type===We&&A(O,z),O.needsUpdate=!1}r=this.type,c.needsUpdate=!1,e.setRenderTarget(f,l,g)};function A(E,C){const z=n.update(w);_.defines.VSM_SAMPLES!==E.blurSamples&&(_.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _t(s.x,s.y)),_.uniforms.shadow_pass.value=E.map.texture,_.uniforms.resolution.value=E.mapSize,_.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(C,null,z,_,w,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value=E.mapSize,x.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(C,null,z,x,w,null)}function v(E,C,z,f){let l=null;const g=z.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(g!==void 0)l=g;else if(l=z.isPointLight===!0?R:p,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=l.uuid,B=C.uuid;let G=M[D];G===void 0&&(G={},M[D]=G);let k=G[B];k===void 0&&(k=l.clone(),G[B]=k,C.addEventListener("dispose",U)),l=k}if(l.visible=C.visible,l.wireframe=C.wireframe,f===We?l.side=C.shadowSide!==null?C.shadowSide:C.side:l.side=C.shadowSide!==null?C.shadowSide:m[C.side],l.alphaMap=C.alphaMap,l.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,l.map=C.map,l.clipShadows=C.clipShadows,l.clippingPlanes=C.clippingPlanes,l.clipIntersection=C.clipIntersection,l.displacementMap=C.displacementMap,l.displacementScale=C.displacementScale,l.displacementBias=C.displacementBias,l.wireframeLinewidth=C.wireframeLinewidth,l.linewidth=C.linewidth,z.isPointLight===!0&&l.isMeshDistanceMaterial===!0){const D=e.properties.get(l);D.light=z}return l}function T(E,C,z,f,l){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&l===We)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld);const B=n.update(E),G=E.material;if(Array.isArray(G)){const k=B.groups;for(let F=0,Z=k.length;F<Z;F++){const O=k[F],ne=G[O.materialIndex];if(ne&&ne.visible){const oe=v(E,ne,f,l);E.onBeforeShadow(e,E,C,z,B,oe,O),e.renderBufferDirect(z,null,B,oe,E,O),E.onAfterShadow(e,E,C,z,B,oe,O)}}}else if(G.visible){const k=v(E,G,f,l);E.onBeforeShadow(e,E,C,z,B,k,null),e.renderBufferDirect(z,null,B,k,E,null),E.onAfterShadow(e,E,C,z,B,k,null)}}const D=E.children;for(let B=0,G=D.length;B<G;B++)T(D[B],C,z,f,l)}function U(E){E.target.removeEventListener("dispose",U);for(const z in M){const f=M[z],l=E.target.uuid;l in f&&(f[l].dispose(),delete f[l])}}}const cl={[Jt]:Qt,[Zt]:qt,[jt]:Kt,[bt]:$t,[Qt]:Jt,[qt]:Zt,[Kt]:jt,[$t]:bt};function yl(e,n){function t(){let h=!1;const $=new Xe;let Y=null;const J=new Xe(0,0,0,0);return{setMask:function(W){Y!==W&&!h&&(e.colorMask(W,W,W,W),Y=W)},setLocked:function(W){h=W},setClear:function(W,N,te,ue,Ae){Ae===!0&&(W*=ue,N*=ue,te*=ue),$.set(W,N,te,ue),J.equals($)===!1&&(e.clearColor(W,N,te,ue),J.copy($))},reset:function(){h=!1,Y=null,J.set(-1,0,0,0)}}}function i(){let h=!1,$=!1,Y=null,J=null,W=null;return{setReversed:function(N){if($!==N){const te=n.get("EXT_clip_control");N?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),$=N;const ue=W;W=null,this.setClear(ue)}},getReversed:function(){return $},setTest:function(N){N?V(e.DEPTH_TEST):ee(e.DEPTH_TEST)},setMask:function(N){Y!==N&&!h&&(e.depthMask(N),Y=N)},setFunc:function(N){if($&&(N=cl[N]),J!==N){switch(N){case Jt:e.depthFunc(e.NEVER);break;case Qt:e.depthFunc(e.ALWAYS);break;case Zt:e.depthFunc(e.LESS);break;case bt:e.depthFunc(e.LEQUAL);break;case jt:e.depthFunc(e.EQUAL);break;case $t:e.depthFunc(e.GEQUAL);break;case qt:e.depthFunc(e.GREATER);break;case Kt:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}J=N}},setLocked:function(N){h=N},setClear:function(N){W!==N&&($&&(N=1-N),e.clearDepth(N),W=N)},reset:function(){h=!1,Y=null,J=null,W=null,$=!1}}}function s(){let h=!1,$=null,Y=null,J=null,W=null,N=null,te=null,ue=null,Ae=null;return{setTest:function(Ee){h||(Ee?V(e.STENCIL_TEST):ee(e.STENCIL_TEST))},setMask:function(Ee){$!==Ee&&!h&&(e.stencilMask(Ee),$=Ee)},setFunc:function(Ee,qe,$e){(Y!==Ee||J!==qe||W!==$e)&&(e.stencilFunc(Ee,qe,$e),Y=Ee,J=qe,W=$e)},setOp:function(Ee,qe,$e){(N!==Ee||te!==qe||ue!==$e)&&(e.stencilOp(Ee,qe,$e),N=Ee,te=qe,ue=$e)},setLocked:function(Ee){h=Ee},setClear:function(Ee){Ae!==Ee&&(e.clearStencil(Ee),Ae=Ee)},reset:function(){h=!1,$=null,Y=null,J=null,W=null,N=null,te=null,ue=null,Ae=null}}}const o=new t,d=new i,p=new s,R=new WeakMap,M=new WeakMap;let b={},m={},_=new WeakMap,x=[],y=null,w=!1,c=null,r=null,A=null,v=null,T=null,U=null,E=null,C=new Re(0,0,0),z=0,f=!1,l=null,g=null,D=null,B=null,G=null;const k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const O=e.getParameter(e.VERSION);O.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=Z>=1):O.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=Z>=2);let ne=null,oe={};const he=e.getParameter(e.SCISSOR_BOX),Te=e.getParameter(e.VIEWPORT),Le=new Xe().fromArray(he),Pe=new Xe().fromArray(Te);function Ce(h,$,Y,J){const W=new Uint8Array(4),N=e.createTexture();e.bindTexture(h,N),e.texParameteri(h,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(h,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let te=0;te<Y;te++)h===e.TEXTURE_3D||h===e.TEXTURE_2D_ARRAY?e.texImage3D($,0,e.RGBA,1,1,J,0,e.RGBA,e.UNSIGNED_BYTE,W):e.texImage2D($+te,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,W);return N}const I={};I[e.TEXTURE_2D]=Ce(e.TEXTURE_2D,e.TEXTURE_2D,1),I[e.TEXTURE_CUBE_MAP]=Ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[e.TEXTURE_2D_ARRAY]=Ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),I[e.TEXTURE_3D]=Ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),d.setClear(1),p.setClear(0),V(e.DEPTH_TEST),d.setFunc(bt),_e(!1),Ie(ln),V(e.CULL_FACE),be(tt);function V(h){b[h]!==!0&&(e.enable(h),b[h]=!0)}function ee(h){b[h]!==!1&&(e.disable(h),b[h]=!1)}function de(h,$){return m[h]!==$?(e.bindFramebuffer(h,$),m[h]=$,h===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=$),h===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=$),!0):!1}function ie(h,$){let Y=x,J=!1;if(h){Y=_.get($),Y===void 0&&(Y=[],_.set($,Y));const W=h.textures;if(Y.length!==W.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let N=0,te=W.length;N<te;N++)Y[N]=e.COLOR_ATTACHMENT0+N;Y.length=W.length,J=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,J=!0);J&&e.drawBuffers(Y)}function ge(h){return y!==h?(e.useProgram(h),y=h,!0):!1}const Be={[lt]:e.FUNC_ADD,[Qi]:e.FUNC_SUBTRACT,[Zi]:e.FUNC_REVERSE_SUBTRACT};Be[va]=e.MIN,Be[ga]=e.MAX;const ve={[pa]:e.ZERO,[da]:e.ONE,[fa]:e.SRC_COLOR,[ua]:e.SRC_ALPHA,[la]:e.SRC_ALPHA_SATURATE,[ca]:e.DST_COLOR,[sa]:e.DST_ALPHA,[oa]:e.ONE_MINUS_SRC_COLOR,[ra]:e.ONE_MINUS_SRC_ALPHA,[aa]:e.ONE_MINUS_DST_COLOR,[ia]:e.ONE_MINUS_DST_ALPHA,[na]:e.CONSTANT_COLOR,[ta]:e.ONE_MINUS_CONSTANT_COLOR,[ea]:e.CONSTANT_ALPHA,[Ji]:e.ONE_MINUS_CONSTANT_ALPHA};function be(h,$,Y,J,W,N,te,ue,Ae,Ee){if(h===tt){w===!0&&(ee(e.BLEND),w=!1);return}if(w===!1&&(V(e.BLEND),w=!0),h!==ma){if(h!==c||Ee!==f){if((r!==lt||T!==lt)&&(e.blendEquation(e.FUNC_ADD),r=lt,T=lt),Ee)switch(h){case Tt:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dn:e.blendFunc(e.ONE,e.ONE);break;case fn:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case un:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",h);break}else switch(h){case Tt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case fn:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case un:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",h);break}A=null,v=null,U=null,E=null,C.set(0,0,0),z=0,c=h,f=Ee}return}W=W||$,N=N||Y,te=te||J,($!==r||W!==T)&&(e.blendEquationSeparate(Be[$],Be[W]),r=$,T=W),(Y!==A||J!==v||N!==U||te!==E)&&(e.blendFuncSeparate(ve[Y],ve[J],ve[N],ve[te]),A=Y,v=J,U=N,E=te),(ue.equals(C)===!1||Ae!==z)&&(e.blendColor(ue.r,ue.g,ue.b,Ae),C.copy(ue),z=Ae),c=h,f=!1}function xe(h,$){h.side===Rt?ee(e.CULL_FACE):V(e.CULL_FACE);let Y=h.side===Ye;$&&(Y=!Y),_e(Y),h.blending===Tt&&h.transparent===!1?be(tt):be(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),d.setFunc(h.depthFunc),d.setTest(h.depthTest),d.setMask(h.depthWrite),o.setMask(h.colorWrite);const J=h.stencilWrite;p.setTest(J),J&&(p.setMask(h.stencilWriteMask),p.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),p.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass)),De(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?V(e.SAMPLE_ALPHA_TO_COVERAGE):ee(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(h){l!==h&&(h?e.frontFace(e.CW):e.frontFace(e.CCW),l=h)}function Ie(h){h!==ha?(V(e.CULL_FACE),h!==g&&(h===ln?e.cullFace(e.BACK):h===_a?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ee(e.CULL_FACE),g=h}function Ge(h){h!==D&&(F&&e.lineWidth(h),D=h)}function De(h,$,Y){h?(V(e.POLYGON_OFFSET_FILL),(B!==$||G!==Y)&&(e.polygonOffset($,Y),B=$,G=Y)):ee(e.POLYGON_OFFSET_FILL)}function He(h){h?V(e.SCISSOR_TEST):ee(e.SCISSOR_TEST)}function Ve(h){h===void 0&&(h=e.TEXTURE0+k-1),ne!==h&&(e.activeTexture(h),ne=h)}function Ne(h,$,Y){Y===void 0&&(ne===null?Y=e.TEXTURE0+k-1:Y=ne);let J=oe[Y];J===void 0&&(J={type:void 0,texture:void 0},oe[Y]=J),(J.type!==h||J.texture!==$)&&(ne!==Y&&(e.activeTexture(Y),ne=Y),e.bindTexture(h,$||I[h]),J.type=h,J.texture=$)}function u(){const h=oe[ne];h!==void 0&&h.type!==void 0&&(e.bindTexture(h.type,null),h.type=void 0,h.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function S(){try{e.compressedTexImage3D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function L(){try{e.texSubImage2D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function H(){try{e.texSubImage3D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function P(){try{e.compressedTexSubImage2D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function ae(){try{e.compressedTexSubImage3D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function q(){try{e.texStorage2D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function se(){try{e.texStorage3D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function le(){try{e.texImage2D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function X(){try{e.texImage3D(...arguments)}catch(h){console.error("THREE.WebGLState:",h)}}function j(h){Le.equals(h)===!1&&(e.scissor(h.x,h.y,h.z,h.w),Le.copy(h))}function ce(h){Pe.equals(h)===!1&&(e.viewport(h.x,h.y,h.z,h.w),Pe.copy(h))}function re(h,$){let Y=M.get($);Y===void 0&&(Y=new WeakMap,M.set($,Y));let J=Y.get(h);J===void 0&&(J=e.getUniformBlockIndex($,h.name),Y.set(h,J))}function Q(h,$){const J=M.get($).get(h);R.get($)!==J&&(e.uniformBlockBinding($,J,h.__bindingPointIndex),R.set($,J))}function pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),b={},ne=null,oe={},m={},_=new WeakMap,x=[],y=null,w=!1,c=null,r=null,A=null,v=null,T=null,U=null,E=null,C=new Re(0,0,0),z=0,f=!1,l=null,g=null,D=null,B=null,G=null,Le.set(0,0,e.canvas.width,e.canvas.height),Pe.set(0,0,e.canvas.width,e.canvas.height),o.reset(),d.reset(),p.reset()}return{buffers:{color:o,depth:d,stencil:p},enable:V,disable:ee,bindFramebuffer:de,drawBuffers:ie,useProgram:ge,setBlending:be,setMaterial:xe,setFlipSided:_e,setCullFace:Ie,setLineWidth:Ge,setPolygonOffset:De,setScissorTest:He,activeTexture:Ve,bindTexture:Ne,unbindTexture:u,compressedTexImage2D:a,compressedTexImage3D:S,texImage2D:le,texImage3D:X,updateUBOMapping:re,uniformBlockBinding:Q,texStorage2D:q,texStorage3D:se,texSubImage2D:L,texSubImage3D:H,compressedTexSubImage2D:P,compressedTexSubImage3D:ae,scissor:j,viewport:ce,reset:pe}}function Nl(e,n,t,i,s,o,d){const p=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,R=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new Fe,b=new WeakMap;let m;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(u,a){return x?new OffscreenCanvas(u,a):Pa("canvas")}function w(u,a,S){let L=1;const H=Ne(u);if((H.width>S||H.height>S)&&(L=S/Math.max(H.width,H.height)),L<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const P=Math.floor(L*H.width),ae=Math.floor(L*H.height);m===void 0&&(m=y(P,ae));const q=a?y(P,ae):m;return q.width=P,q.height=ae,q.getContext("2d").drawImage(u,0,0,P,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+P+"x"+ae+")."),q}else return"data"in u&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),u;return u}function c(u){return u.generateMipmaps}function r(u){e.generateMipmap(u)}function A(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(u,a,S,L,H=!1){if(u!==null){if(e[u]!==void 0)return e[u];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let P=a;if(a===e.RED&&(S===e.FLOAT&&(P=e.R32F),S===e.HALF_FLOAT&&(P=e.R16F),S===e.UNSIGNED_BYTE&&(P=e.R8)),a===e.RED_INTEGER&&(S===e.UNSIGNED_BYTE&&(P=e.R8UI),S===e.UNSIGNED_SHORT&&(P=e.R16UI),S===e.UNSIGNED_INT&&(P=e.R32UI),S===e.BYTE&&(P=e.R8I),S===e.SHORT&&(P=e.R16I),S===e.INT&&(P=e.R32I)),a===e.RG&&(S===e.FLOAT&&(P=e.RG32F),S===e.HALF_FLOAT&&(P=e.RG16F),S===e.UNSIGNED_BYTE&&(P=e.RG8)),a===e.RG_INTEGER&&(S===e.UNSIGNED_BYTE&&(P=e.RG8UI),S===e.UNSIGNED_SHORT&&(P=e.RG16UI),S===e.UNSIGNED_INT&&(P=e.RG32UI),S===e.BYTE&&(P=e.RG8I),S===e.SHORT&&(P=e.RG16I),S===e.INT&&(P=e.RG32I)),a===e.RGB_INTEGER&&(S===e.UNSIGNED_BYTE&&(P=e.RGB8UI),S===e.UNSIGNED_SHORT&&(P=e.RGB16UI),S===e.UNSIGNED_INT&&(P=e.RGB32UI),S===e.BYTE&&(P=e.RGB8I),S===e.SHORT&&(P=e.RGB16I),S===e.INT&&(P=e.RGB32I)),a===e.RGBA_INTEGER&&(S===e.UNSIGNED_BYTE&&(P=e.RGBA8UI),S===e.UNSIGNED_SHORT&&(P=e.RGBA16UI),S===e.UNSIGNED_INT&&(P=e.RGBA32UI),S===e.BYTE&&(P=e.RGBA8I),S===e.SHORT&&(P=e.RGBA16I),S===e.INT&&(P=e.RGBA32I)),a===e.RGB&&(S===e.UNSIGNED_INT_5_9_9_9_REV&&(P=e.RGB9_E5),S===e.UNSIGNED_INT_10F_11F_11F_REV&&(P=e.R11F_G11F_B10F)),a===e.RGBA){const ae=H?Si:ye.getTransfer(L);S===e.FLOAT&&(P=e.RGBA32F),S===e.HALF_FLOAT&&(P=e.RGBA16F),S===e.UNSIGNED_BYTE&&(P=ae===Me?e.SRGB8_ALPHA8:e.RGBA8),S===e.UNSIGNED_SHORT_4_4_4_4&&(P=e.RGBA4),S===e.UNSIGNED_SHORT_5_5_5_1&&(P=e.RGB5_A1)}return(P===e.R16F||P===e.R32F||P===e.RG16F||P===e.RG32F||P===e.RGBA16F||P===e.RGBA32F)&&n.get("EXT_color_buffer_float"),P}function T(u,a){let S;return u?a===null||a===wt||a===Ut?S=e.DEPTH24_STENCIL8:a===et?S=e.DEPTH32F_STENCIL8:a===en&&(S=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===wt||a===Ut?S=e.DEPTH_COMPONENT24:a===et?S=e.DEPTH_COMPONENT32F:a===en&&(S=e.DEPTH_COMPONENT16),S}function U(u,a){return c(u)===!0||u.isFramebufferTexture&&u.minFilter!==dt&&u.minFilter!==rt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function E(u){const a=u.target;a.removeEventListener("dispose",E),z(a),a.isVideoTexture&&b.delete(a)}function C(u){const a=u.target;a.removeEventListener("dispose",C),l(a)}function z(u){const a=i.get(u);if(a.__webglInit===void 0)return;const S=u.source,L=_.get(S);if(L){const H=L[a.__cacheKey];H.usedTimes--,H.usedTimes===0&&f(u),Object.keys(L).length===0&&_.delete(S)}i.remove(u)}function f(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const S=u.source,L=_.get(S);delete L[a.__cacheKey],d.memory.textures--}function l(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(a.__webglFramebuffer[L]))for(let H=0;H<a.__webglFramebuffer[L].length;H++)e.deleteFramebuffer(a.__webglFramebuffer[L][H]);else e.deleteFramebuffer(a.__webglFramebuffer[L]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[L])}else{if(Array.isArray(a.__webglFramebuffer))for(let L=0;L<a.__webglFramebuffer.length;L++)e.deleteFramebuffer(a.__webglFramebuffer[L]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let L=0;L<a.__webglColorRenderbuffer.length;L++)a.__webglColorRenderbuffer[L]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[L]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const S=u.textures;for(let L=0,H=S.length;L<H;L++){const P=i.get(S[L]);P.__webglTexture&&(e.deleteTexture(P.__webglTexture),d.memory.textures--),i.remove(S[L])}i.remove(u)}let g=0;function D(){g=0}function B(){const u=g;return u>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+s.maxTextures),g+=1,u}function G(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function k(u,a){const S=i.get(u);if(u.isVideoTexture&&He(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&S.__version!==u.version){const L=u.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(S,u,a);return}}else u.isExternalTexture&&(S.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,S.__webglTexture,e.TEXTURE0+a)}function F(u,a){const S=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&S.__version!==u.version){I(S,u,a);return}t.bindTexture(e.TEXTURE_2D_ARRAY,S.__webglTexture,e.TEXTURE0+a)}function Z(u,a){const S=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&S.__version!==u.version){I(S,u,a);return}t.bindTexture(e.TEXTURE_3D,S.__webglTexture,e.TEXTURE0+a)}function O(u,a){const S=i.get(u);if(u.version>0&&S.__version!==u.version){V(S,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+a)}const ne={[Ma]:e.REPEAT,[Sa]:e.CLAMP_TO_EDGE,[Ea]:e.MIRRORED_REPEAT},oe={[dt]:e.NEAREST,[Ta]:e.NEAREST_MIPMAP_NEAREST,[vt]:e.NEAREST_MIPMAP_LINEAR,[rt]:e.LINEAR,[Lt]:e.LINEAR_MIPMAP_NEAREST,[mt]:e.LINEAR_MIPMAP_LINEAR},he={[Ua]:e.NEVER,[wa]:e.ALWAYS,[Ca]:e.LESS,[gi]:e.LEQUAL,[ba]:e.EQUAL,[Ra]:e.GEQUAL,[Aa]:e.GREATER,[xa]:e.NOTEQUAL};function Te(u,a){if(a.type===et&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===rt||a.magFilter===Lt||a.magFilter===vt||a.magFilter===mt||a.minFilter===rt||a.minFilter===Lt||a.minFilter===vt||a.minFilter===mt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,ne[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,ne[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,ne[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===dt||a.minFilter!==vt&&a.minFilter!==mt||a.type===et&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const S=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,s.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Le(u,a){let S=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",E));const L=a.source;let H=_.get(L);H===void 0&&(H={},_.set(L,H));const P=G(a);if(P!==u.__cacheKey){H[P]===void 0&&(H[P]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,S=!0),H[P].usedTimes++;const ae=H[u.__cacheKey];ae!==void 0&&(H[u.__cacheKey].usedTimes--,ae.usedTimes===0&&f(a)),u.__cacheKey=P,u.__webglTexture=H[P].texture}return S}function Pe(u,a,S){return Math.floor(Math.floor(u/S)/a)}function Ce(u,a,S,L){const P=u.updateRanges;if(P.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,S,L,a.data);else{P.sort((X,j)=>X.start-j.start);let ae=0;for(let X=1;X<P.length;X++){const j=P[ae],ce=P[X],re=j.start+j.count,Q=Pe(ce.start,a.width,4),pe=Pe(j.start,a.width,4);ce.start<=re+1&&Q===pe&&Pe(ce.start+ce.count-1,a.width,4)===Q?j.count=Math.max(j.count,ce.start+ce.count-j.start):(++ae,P[ae]=ce)}P.length=ae+1;const q=e.getParameter(e.UNPACK_ROW_LENGTH),se=e.getParameter(e.UNPACK_SKIP_PIXELS),le=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let X=0,j=P.length;X<j;X++){const ce=P[X],re=Math.floor(ce.start/4),Q=Math.ceil(ce.count/4),pe=re%a.width,h=Math.floor(re/a.width),$=Q,Y=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,pe),e.pixelStorei(e.UNPACK_SKIP_ROWS,h),t.texSubImage2D(e.TEXTURE_2D,0,pe,h,$,Y,S,L,a.data)}u.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,q),e.pixelStorei(e.UNPACK_SKIP_PIXELS,se),e.pixelStorei(e.UNPACK_SKIP_ROWS,le)}}function I(u,a,S){let L=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(L=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(L=e.TEXTURE_3D);const H=Le(u,a),P=a.source;t.bindTexture(L,u.__webglTexture,e.TEXTURE0+S);const ae=i.get(P);if(P.version!==ae.__version||H===!0){t.activeTexture(e.TEXTURE0+S);const q=ye.getPrimaries(ye.workingColorSpace),se=a.colorSpace===at?null:ye.getPrimaries(a.colorSpace),le=a.colorSpace===at||q===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let X=w(a.image,!1,s.maxTextureSize);X=Ve(a,X);const j=o.convert(a.format,a.colorSpace),ce=o.convert(a.type);let re=v(a.internalFormat,j,ce,a.colorSpace,a.isVideoTexture);Te(L,a);let Q;const pe=a.mipmaps,h=a.isVideoTexture!==!0,$=ae.__version===void 0||H===!0,Y=P.dataReady,J=U(a,X);if(a.isDepthTexture)re=T(a.format===Ct,a.type),$&&(h?t.texStorage2D(e.TEXTURE_2D,1,re,X.width,X.height):t.texImage2D(e.TEXTURE_2D,0,re,X.width,X.height,0,j,ce,null));else if(a.isDataTexture)if(pe.length>0){h&&$&&t.texStorage2D(e.TEXTURE_2D,J,re,pe[0].width,pe[0].height);for(let W=0,N=pe.length;W<N;W++)Q=pe[W],h?Y&&t.texSubImage2D(e.TEXTURE_2D,W,0,0,Q.width,Q.height,j,ce,Q.data):t.texImage2D(e.TEXTURE_2D,W,re,Q.width,Q.height,0,j,ce,Q.data);a.generateMipmaps=!1}else h?($&&t.texStorage2D(e.TEXTURE_2D,J,re,X.width,X.height),Y&&Ce(a,X,j,ce)):t.texImage2D(e.TEXTURE_2D,0,re,X.width,X.height,0,j,ce,X.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){h&&$&&t.texStorage3D(e.TEXTURE_2D_ARRAY,J,re,pe[0].width,pe[0].height,X.depth);for(let W=0,N=pe.length;W<N;W++)if(Q=pe[W],a.format!==ze)if(j!==null)if(h){if(Y)if(a.layerUpdates.size>0){const te=Vn(Q.width,Q.height,a.format,a.type);for(const ue of a.layerUpdates){const Ae=Q.data.subarray(ue*te/Q.data.BYTES_PER_ELEMENT,(ue+1)*te/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,ue,Q.width,Q.height,1,j,Ae)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,Q.width,Q.height,X.depth,j,Q.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,W,re,Q.width,Q.height,X.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else h?Y&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,Q.width,Q.height,X.depth,j,ce,Q.data):t.texImage3D(e.TEXTURE_2D_ARRAY,W,re,Q.width,Q.height,X.depth,0,j,ce,Q.data)}else{h&&$&&t.texStorage2D(e.TEXTURE_2D,J,re,pe[0].width,pe[0].height);for(let W=0,N=pe.length;W<N;W++)Q=pe[W],a.format!==ze?j!==null?h?Y&&t.compressedTexSubImage2D(e.TEXTURE_2D,W,0,0,Q.width,Q.height,j,Q.data):t.compressedTexImage2D(e.TEXTURE_2D,W,re,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):h?Y&&t.texSubImage2D(e.TEXTURE_2D,W,0,0,Q.width,Q.height,j,ce,Q.data):t.texImage2D(e.TEXTURE_2D,W,re,Q.width,Q.height,0,j,ce,Q.data)}else if(a.isDataArrayTexture)if(h){if($&&t.texStorage3D(e.TEXTURE_2D_ARRAY,J,re,X.width,X.height,X.depth),Y)if(a.layerUpdates.size>0){const W=Vn(X.width,X.height,a.format,a.type);for(const N of a.layerUpdates){const te=X.data.subarray(N*W/X.data.BYTES_PER_ELEMENT,(N+1)*W/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,N,X.width,X.height,1,j,ce,te)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,j,ce,X.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,re,X.width,X.height,X.depth,0,j,ce,X.data);else if(a.isData3DTexture)h?($&&t.texStorage3D(e.TEXTURE_3D,J,re,X.width,X.height,X.depth),Y&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,j,ce,X.data)):t.texImage3D(e.TEXTURE_3D,0,re,X.width,X.height,X.depth,0,j,ce,X.data);else if(a.isFramebufferTexture){if($)if(h)t.texStorage2D(e.TEXTURE_2D,J,re,X.width,X.height);else{let W=X.width,N=X.height;for(let te=0;te<J;te++)t.texImage2D(e.TEXTURE_2D,te,re,W,N,0,j,ce,null),W>>=1,N>>=1}}else if(pe.length>0){if(h&&$){const W=Ne(pe[0]);t.texStorage2D(e.TEXTURE_2D,J,re,W.width,W.height)}for(let W=0,N=pe.length;W<N;W++)Q=pe[W],h?Y&&t.texSubImage2D(e.TEXTURE_2D,W,0,0,j,ce,Q):t.texImage2D(e.TEXTURE_2D,W,re,j,ce,Q);a.generateMipmaps=!1}else if(h){if($){const W=Ne(X);t.texStorage2D(e.TEXTURE_2D,J,re,W.width,W.height)}Y&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,j,ce,X)}else t.texImage2D(e.TEXTURE_2D,0,re,j,ce,X);c(a)&&r(L),ae.__version=P.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function V(u,a,S){if(a.image.length!==6)return;const L=Le(u,a),H=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+S);const P=i.get(H);if(H.version!==P.__version||L===!0){t.activeTexture(e.TEXTURE0+S);const ae=ye.getPrimaries(ye.workingColorSpace),q=a.colorSpace===at?null:ye.getPrimaries(a.colorSpace),se=a.colorSpace===at||ae===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const le=a.isCompressedTexture||a.image[0].isCompressedTexture,X=a.image[0]&&a.image[0].isDataTexture,j=[];for(let N=0;N<6;N++)!le&&!X?j[N]=w(a.image[N],!0,s.maxCubemapSize):j[N]=X?a.image[N].image:a.image[N],j[N]=Ve(a,j[N]);const ce=j[0],re=o.convert(a.format,a.colorSpace),Q=o.convert(a.type),pe=v(a.internalFormat,re,Q,a.colorSpace),h=a.isVideoTexture!==!0,$=P.__version===void 0||L===!0,Y=H.dataReady;let J=U(a,ce);Te(e.TEXTURE_CUBE_MAP,a);let W;if(le){h&&$&&t.texStorage2D(e.TEXTURE_CUBE_MAP,J,pe,ce.width,ce.height);for(let N=0;N<6;N++){W=j[N].mipmaps;for(let te=0;te<W.length;te++){const ue=W[te];a.format!==ze?re!==null?h?Y&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,te,0,0,ue.width,ue.height,re,ue.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,te,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):h?Y&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,te,0,0,ue.width,ue.height,re,Q,ue.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,te,pe,ue.width,ue.height,0,re,Q,ue.data)}}}else{if(W=a.mipmaps,h&&$){W.length>0&&J++;const N=Ne(j[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,J,pe,N.width,N.height)}for(let N=0;N<6;N++)if(X){h?Y&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,j[N].width,j[N].height,re,Q,j[N].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,pe,j[N].width,j[N].height,0,re,Q,j[N].data);for(let te=0;te<W.length;te++){const Ae=W[te].image[N].image;h?Y&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,te+1,0,0,Ae.width,Ae.height,re,Q,Ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,te+1,pe,Ae.width,Ae.height,0,re,Q,Ae.data)}}else{h?Y&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,re,Q,j[N]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,pe,re,Q,j[N]);for(let te=0;te<W.length;te++){const ue=W[te];h?Y&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,te+1,0,0,re,Q,ue.image[N]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+N,te+1,pe,re,Q,ue.image[N])}}}c(a)&&r(e.TEXTURE_CUBE_MAP),P.__version=H.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function ee(u,a,S,L,H,P){const ae=o.convert(S.format,S.colorSpace),q=o.convert(S.type),se=v(S.internalFormat,ae,q,S.colorSpace),le=i.get(a),X=i.get(S);if(X.__renderTarget=a,!le.__hasExternalTextures){const j=Math.max(1,a.width>>P),ce=Math.max(1,a.height>>P);H===e.TEXTURE_3D||H===e.TEXTURE_2D_ARRAY?t.texImage3D(H,P,se,j,ce,a.depth,0,ae,q,null):t.texImage2D(H,P,se,j,ce,0,ae,q,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),De(a)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,L,H,X.__webglTexture,0,Ge(a)):(H===e.TEXTURE_2D||H>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,L,H,X.__webglTexture,P),t.bindFramebuffer(e.FRAMEBUFFER,null)}function de(u,a,S){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const L=a.depthTexture,H=L&&L.isDepthTexture?L.type:null,P=T(a.stencilBuffer,H),ae=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=Ge(a);De(a)?p.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,q,P,a.width,a.height):S?e.renderbufferStorageMultisample(e.RENDERBUFFER,q,P,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,P,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,u)}else{const L=a.textures;for(let H=0;H<L.length;H++){const P=L[H],ae=o.convert(P.format,P.colorSpace),q=o.convert(P.type),se=v(P.internalFormat,ae,q,P.colorSpace),le=Ge(a);S&&De(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,le,se,a.width,a.height):De(a)?p.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le,se,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,se,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ie(u,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=i.get(a.depthTexture);L.__renderTarget=a,(!L.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),k(a.depthTexture,0);const H=L.__webglTexture,P=Ge(a);if(a.depthTexture.format===rn)De(a)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,H,0,P):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,H,0);else if(a.depthTexture.format===Ct)De(a)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,H,0,P):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function ge(u){const a=i.get(u),S=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const L=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),L){const H=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,L.removeEventListener("dispose",H)};L.addEventListener("dispose",H),a.__depthDisposeCallback=H}a.__boundDepthTexture=L}if(u.depthTexture&&!a.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");const L=u.texture.mipmaps;L&&L.length>0?ie(a.__webglFramebuffer[0],u):ie(a.__webglFramebuffer,u)}else if(S){a.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[L]),a.__webglDepthbuffer[L]===void 0)a.__webglDepthbuffer[L]=e.createRenderbuffer(),de(a.__webglDepthbuffer[L],u,!1);else{const H=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,P=a.__webglDepthbuffer[L];e.bindRenderbuffer(e.RENDERBUFFER,P),e.framebufferRenderbuffer(e.FRAMEBUFFER,H,e.RENDERBUFFER,P)}}else{const L=u.texture.mipmaps;if(L&&L.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),de(a.__webglDepthbuffer,u,!1);else{const H=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,P=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,P),e.framebufferRenderbuffer(e.FRAMEBUFFER,H,e.RENDERBUFFER,P)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Be(u,a,S){const L=i.get(u);a!==void 0&&ee(L.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),S!==void 0&&ge(u)}function ve(u){const a=u.texture,S=i.get(u),L=i.get(a);u.addEventListener("dispose",C);const H=u.textures,P=u.isWebGLCubeRenderTarget===!0,ae=H.length>1;if(ae||(L.__webglTexture===void 0&&(L.__webglTexture=e.createTexture()),L.__version=a.version,d.memory.textures++),P){S.__webglFramebuffer=[];for(let q=0;q<6;q++)if(a.mipmaps&&a.mipmaps.length>0){S.__webglFramebuffer[q]=[];for(let se=0;se<a.mipmaps.length;se++)S.__webglFramebuffer[q][se]=e.createFramebuffer()}else S.__webglFramebuffer[q]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){S.__webglFramebuffer=[];for(let q=0;q<a.mipmaps.length;q++)S.__webglFramebuffer[q]=e.createFramebuffer()}else S.__webglFramebuffer=e.createFramebuffer();if(ae)for(let q=0,se=H.length;q<se;q++){const le=i.get(H[q]);le.__webglTexture===void 0&&(le.__webglTexture=e.createTexture(),d.memory.textures++)}if(u.samples>0&&De(u)===!1){S.__webglMultisampledFramebuffer=e.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let q=0;q<H.length;q++){const se=H[q];S.__webglColorRenderbuffer[q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,S.__webglColorRenderbuffer[q]);const le=o.convert(se.format,se.colorSpace),X=o.convert(se.type),j=v(se.internalFormat,le,X,se.colorSpace,u.isXRRenderTarget===!0),ce=Ge(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,ce,j,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+q,e.RENDERBUFFER,S.__webglColorRenderbuffer[q])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(S.__webglDepthRenderbuffer=e.createRenderbuffer(),de(S.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(P){t.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture),Te(e.TEXTURE_CUBE_MAP,a);for(let q=0;q<6;q++)if(a.mipmaps&&a.mipmaps.length>0)for(let se=0;se<a.mipmaps.length;se++)ee(S.__webglFramebuffer[q][se],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,se);else ee(S.__webglFramebuffer[q],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);c(a)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let q=0,se=H.length;q<se;q++){const le=H[q],X=i.get(le);let j=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(j=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(j,X.__webglTexture),Te(j,le),ee(S.__webglFramebuffer,u,le,e.COLOR_ATTACHMENT0+q,j,0),c(le)&&r(j)}t.unbindTexture()}else{let q=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(q=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(q,L.__webglTexture),Te(q,a),a.mipmaps&&a.mipmaps.length>0)for(let se=0;se<a.mipmaps.length;se++)ee(S.__webglFramebuffer[se],u,a,e.COLOR_ATTACHMENT0,q,se);else ee(S.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,q,0);c(a)&&r(q),t.unbindTexture()}u.depthBuffer&&ge(u)}function be(u){const a=u.textures;for(let S=0,L=a.length;S<L;S++){const H=a[S];if(c(H)){const P=A(u),ae=i.get(H).__webglTexture;t.bindTexture(P,ae),r(P),t.unbindTexture()}}}const xe=[],_e=[];function Ie(u){if(u.samples>0){if(De(u)===!1){const a=u.textures,S=u.width,L=u.height;let H=e.COLOR_BUFFER_BIT;const P=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=i.get(u),q=a.length>1;if(q)for(let le=0;le<a.length;le++)t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const se=u.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<a.length;le++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(H|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(H|=e.STENCIL_BUFFER_BIT)),q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const X=i.get(a[le]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,X,0)}e.blitFramebuffer(0,0,S,L,0,0,S,L,H,e.NEAREST),R===!0&&(xe.length=0,_e.length=0,xe.push(e.COLOR_ATTACHMENT0+le),u.depthBuffer&&u.resolveDepthBuffer===!1&&(xe.push(P),_e.push(P),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),q)for(let le=0;le<a.length;le++){t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const X=i.get(a[le]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,X,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&R){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function Ge(u){return Math.min(s.maxSamples,u.samples)}function De(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function He(u){const a=d.render.frame;b.get(u)!==a&&(b.set(u,a),u.update())}function Ve(u,a){const S=u.colorSpace,L=u.format,H=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||S!==an&&S!==at&&(ye.getTransfer(S)===Me?(L!==ze||H!==pt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",S)),a}function Ne(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(M.width=u.naturalWidth||u.width,M.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(M.width=u.displayWidth,M.height=u.displayHeight):(M.width=u.width,M.height=u.height),M}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=O,this.rebindTextures=Be,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=De}function Ol(e,n){function t(i,s=at){let o;const d=ye.getTransfer(s);if(i===pt)return e.UNSIGNED_BYTE;if(i===Da)return e.UNSIGNED_SHORT_4_4_4_4;if(i===La)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ia)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ya)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Na)return e.BYTE;if(i===Oa)return e.SHORT;if(i===en)return e.UNSIGNED_SHORT;if(i===_i)return e.INT;if(i===wt)return e.UNSIGNED_INT;if(i===et)return e.FLOAT;if(i===nn)return e.HALF_FLOAT;if(i===Fa)return e.ALPHA;if(i===Ba)return e.RGB;if(i===ze)return e.RGBA;if(i===rn)return e.DEPTH_COMPONENT;if(i===Ct)return e.DEPTH_STENCIL;if(i===Ga)return e.RED;if(i===Ha)return e.RED_INTEGER;if(i===Va)return e.RG;if(i===ka)return e.RG_INTEGER;if(i===Wa)return e.RGBA_INTEGER;if(i===It||i===yt||i===Nt||i===Ot)if(d===Me)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===It)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yt)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nt)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ot)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===It)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yt)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nt)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ot)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pn||i===hn||i===_n||i===mn)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===pn)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hn)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_n)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mn)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vn||i===gn||i===En)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===vn||i===gn)return d===Me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===En)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sn||i===Mn||i===Tn||i===xn||i===An||i===Rn||i===bn||i===Cn||i===wn||i===Un||i===Pn||i===Dn||i===Ln||i===In)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Sn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===An)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Un)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dn)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ln)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===In)return d===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yn||i===Nn||i===On)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===yn)return d===Me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nn)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===On)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fn||i===Bn||i===Gn||i===Hn)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Fn)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Bn)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gn)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hn)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ut?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const ll=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ul=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fl{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new xi(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new nt({vertexShader:ll,fragmentShader:ul,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fl extends za{constructor(n,t){super();const i=this;let s=null,o=1,d=null,p="local-floor",R=1,M=null,b=null,m=null,_=null,x=null,y=null;const w=typeof XRWebGLBinding<"u",c=new fl,r={},A=t.getContextAttributes();let v=null,T=null;const U=[],E=[],C=new Fe;let z=null;const f=new xt;f.viewport=new Xe;const l=new xt;l.viewport=new Xe;const g=[f,l],D=new No;let B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let V=U[I];return V===void 0&&(V=new Ft,U[I]=V),V.getTargetRaySpace()},this.getControllerGrip=function(I){let V=U[I];return V===void 0&&(V=new Ft,U[I]=V),V.getGripSpace()},this.getHand=function(I){let V=U[I];return V===void 0&&(V=new Ft,U[I]=V),V.getHandSpace()};function k(I){const V=E.indexOf(I.inputSource);if(V===-1)return;const ee=U[V];ee!==void 0&&(ee.update(I.inputSource,I.frame,M||d),ee.dispatchEvent({type:I.type,data:I.inputSource}))}function F(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Z);for(let I=0;I<U.length;I++){const V=E[I];V!==null&&(E[I]=null,U[I].disconnect(V))}B=null,G=null,c.reset();for(const I in r)delete r[I];n.setRenderTarget(v),x=null,_=null,m=null,s=null,T=null,Ce.stop(),i.isPresenting=!1,n.setPixelRatio(z),n.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){p=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return M||d},this.setReferenceSpace=function(I){M=I},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(v=n.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Z),A.xrCompatible!==!0&&await t.makeXRCompatible(),z=n.getPixelRatio(),n.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,de=null,ie=null;A.depth&&(ie=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=A.stencil?Ct:rn,de=A.stencil?Ut:wt);const ge={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:o};m=this.getBinding(),_=m.createProjectionLayer(ge),s.updateRenderState({layers:[_]}),n.setPixelRatio(1),n.setSize(_.textureWidth,_.textureHeight,!1),T=new _t(_.textureWidth,_.textureHeight,{format:ze,type:pt,depthTexture:new Ti(_.textureWidth,_.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:A.stencil,colorSpace:n.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:x}),n.setPixelRatio(1),n.setSize(x.framebufferWidth,x.framebufferHeight,!1),T=new _t(x.framebufferWidth,x.framebufferHeight,{format:ze,type:pt,colorSpace:n.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(R),M=null,d=await s.requestReferenceSpace(p),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function Z(I){for(let V=0;V<I.removed.length;V++){const ee=I.removed[V],de=E.indexOf(ee);de>=0&&(E[de]=null,U[de].disconnect(ee))}for(let V=0;V<I.added.length;V++){const ee=I.added[V];let de=E.indexOf(ee);if(de===-1){for(let ge=0;ge<U.length;ge++)if(ge>=E.length){E.push(ee),de=ge;break}else if(E[ge]===null){E[ge]=ee,de=ge;break}if(de===-1)break}const ie=U[de];ie&&ie.connect(ee)}}const O=new Se,ne=new Se;function oe(I,V,ee){O.setFromMatrixPosition(V.matrixWorld),ne.setFromMatrixPosition(ee.matrixWorld);const de=O.distanceTo(ne),ie=V.projectionMatrix.elements,ge=ee.projectionMatrix.elements,Be=ie[14]/(ie[10]-1),ve=ie[14]/(ie[10]+1),be=(ie[9]+1)/ie[5],xe=(ie[9]-1)/ie[5],_e=(ie[8]-1)/ie[0],Ie=(ge[8]+1)/ge[0],Ge=Be*_e,De=Be*Ie,He=de/(-_e+Ie),Ve=He*-_e;if(V.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ve),I.translateZ(He),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),ie[10]===-1)I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Ne=Be+He,u=ve+He,a=Ge-Ve,S=De+(de-Ve),L=be*ve/u*Ne,H=xe*ve/u*Ne;I.projectionMatrix.makePerspective(a,S,L,H,Ne,u),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function he(I,V){V===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(V.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let V=I.near,ee=I.far;c.texture!==null&&(c.depthNear>0&&(V=c.depthNear),c.depthFar>0&&(ee=c.depthFar)),D.near=l.near=f.near=V,D.far=l.far=f.far=ee,(B!==D.near||G!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,G=D.far),D.layers.mask=I.layers.mask|6,f.layers.mask=D.layers.mask&3,l.layers.mask=D.layers.mask&5;const de=I.parent,ie=D.cameras;he(D,de);for(let ge=0;ge<ie.length;ge++)he(ie[ge],de);ie.length===2?oe(D,f,l):D.projectionMatrix.copy(f.projectionMatrix),Te(I,D,de)};function Te(I,V,ee){ee===null?I.matrix.copy(V.matrixWorld):(I.matrix.copy(ee.matrixWorld),I.matrix.invert(),I.matrix.multiply(V.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Xa*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(_===null&&x===null))return R},this.setFoveation=function(I){R=I,_!==null&&(_.fixedFoveation=I),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=I)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(D)},this.getCameraTexture=function(I){return r[I]};let Le=null;function Pe(I,V){if(b=V.getViewerPose(M||d),y=V,b!==null){const ee=b.views;x!==null&&(n.setRenderTargetFramebuffer(T,x.framebuffer),n.setRenderTarget(T));let de=!1;ee.length!==D.cameras.length&&(D.cameras.length=0,de=!0);for(let ve=0;ve<ee.length;ve++){const be=ee[ve];let xe=null;if(x!==null)xe=x.getViewport(be);else{const Ie=m.getViewSubImage(_,be);xe=Ie.viewport,ve===0&&(n.setRenderTargetTextures(T,Ie.colorTexture,Ie.depthStencilTexture),n.setRenderTarget(T))}let _e=g[ve];_e===void 0&&(_e=new xt,_e.layers.enable(ve),_e.viewport=new Xe,g[ve]=_e),_e.matrix.fromArray(be.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(be.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(xe.x,xe.y,xe.width,xe.height),ve===0&&(D.matrix.copy(_e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),de===!0&&D.cameras.push(_e)}const ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){m=i.getBinding();const ve=m.getDepthInformation(ee[0]);ve&&ve.isValid&&ve.texture&&c.init(ve,s.renderState)}if(ie&&ie.includes("camera-access")&&w){n.state.unbindTexture(),m=i.getBinding();for(let ve=0;ve<ee.length;ve++){const be=ee[ve].camera;if(be){let xe=r[be];xe||(xe=new xi,r[be]=xe);const _e=m.getCameraImage(be);xe.sourceTexture=_e}}}}for(let ee=0;ee<U.length;ee++){const de=E[ee],ie=U[ee];de!==null&&ie!==void 0&&ie.update(de,V,M||d)}Le&&Le(I,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),y=null}const Ce=new Oo;Ce.setAnimationLoop(Pe),this.setAnimationLoop=function(I){Le=I},this.dispose=function(){}}}const Ze=new pi,dl=new At;function Bl(e,n){function t(c,r){c.matrixAutoUpdate===!0&&c.updateMatrix(),r.value.copy(c.matrix)}function i(c,r){r.color.getRGB(c.fogColor.value,hi(e)),r.isFog?(c.fogNear.value=r.near,c.fogFar.value=r.far):r.isFogExp2&&(c.fogDensity.value=r.density)}function s(c,r,A,v,T){r.isMeshBasicMaterial||r.isMeshLambertMaterial?o(c,r):r.isMeshToonMaterial?(o(c,r),m(c,r)):r.isMeshPhongMaterial?(o(c,r),b(c,r)):r.isMeshStandardMaterial?(o(c,r),_(c,r),r.isMeshPhysicalMaterial&&x(c,r,T)):r.isMeshMatcapMaterial?(o(c,r),y(c,r)):r.isMeshDepthMaterial?o(c,r):r.isMeshDistanceMaterial?(o(c,r),w(c,r)):r.isMeshNormalMaterial?o(c,r):r.isLineBasicMaterial?(d(c,r),r.isLineDashedMaterial&&p(c,r)):r.isPointsMaterial?R(c,r,A,v):r.isSpriteMaterial?M(c,r):r.isShadowMaterial?(c.color.value.copy(r.color),c.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function o(c,r){c.opacity.value=r.opacity,r.color&&c.diffuse.value.copy(r.color),r.emissive&&c.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(c.map.value=r.map,t(r.map,c.mapTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.bumpMap&&(c.bumpMap.value=r.bumpMap,t(r.bumpMap,c.bumpMapTransform),c.bumpScale.value=r.bumpScale,r.side===Ye&&(c.bumpScale.value*=-1)),r.normalMap&&(c.normalMap.value=r.normalMap,t(r.normalMap,c.normalMapTransform),c.normalScale.value.copy(r.normalScale),r.side===Ye&&c.normalScale.value.negate()),r.displacementMap&&(c.displacementMap.value=r.displacementMap,t(r.displacementMap,c.displacementMapTransform),c.displacementScale.value=r.displacementScale,c.displacementBias.value=r.displacementBias),r.emissiveMap&&(c.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,c.emissiveMapTransform)),r.specularMap&&(c.specularMap.value=r.specularMap,t(r.specularMap,c.specularMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest);const A=n.get(r),v=A.envMap,T=A.envMapRotation;v&&(c.envMap.value=v,Ze.copy(T),Ze.x*=-1,Ze.y*=-1,Ze.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ze.y*=-1,Ze.z*=-1),c.envMapRotation.value.setFromMatrix4(dl.makeRotationFromEuler(Ze)),c.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=r.reflectivity,c.ior.value=r.ior,c.refractionRatio.value=r.refractionRatio),r.lightMap&&(c.lightMap.value=r.lightMap,c.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,c.lightMapTransform)),r.aoMap&&(c.aoMap.value=r.aoMap,c.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,c.aoMapTransform))}function d(c,r){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,r.map&&(c.map.value=r.map,t(r.map,c.mapTransform))}function p(c,r){c.dashSize.value=r.dashSize,c.totalSize.value=r.dashSize+r.gapSize,c.scale.value=r.scale}function R(c,r,A,v){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,c.size.value=r.size*A,c.scale.value=v*.5,r.map&&(c.map.value=r.map,t(r.map,c.uvTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest)}function M(c,r){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,c.rotation.value=r.rotation,r.map&&(c.map.value=r.map,t(r.map,c.mapTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest)}function b(c,r){c.specular.value.copy(r.specular),c.shininess.value=Math.max(r.shininess,1e-4)}function m(c,r){r.gradientMap&&(c.gradientMap.value=r.gradientMap)}function _(c,r){c.metalness.value=r.metalness,r.metalnessMap&&(c.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,c.metalnessMapTransform)),c.roughness.value=r.roughness,r.roughnessMap&&(c.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,c.roughnessMapTransform)),r.envMap&&(c.envMapIntensity.value=r.envMapIntensity)}function x(c,r,A){c.ior.value=r.ior,r.sheen>0&&(c.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),c.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(c.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,c.sheenColorMapTransform)),r.sheenRoughnessMap&&(c.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,c.sheenRoughnessMapTransform))),r.clearcoat>0&&(c.clearcoat.value=r.clearcoat,c.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(c.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,c.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(c.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===Ye&&c.clearcoatNormalScale.value.negate())),r.dispersion>0&&(c.dispersion.value=r.dispersion),r.iridescence>0&&(c.iridescence.value=r.iridescence,c.iridescenceIOR.value=r.iridescenceIOR,c.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(c.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,c.iridescenceMapTransform)),r.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),r.transmission>0&&(c.transmission.value=r.transmission,c.transmissionSamplerMap.value=A.texture,c.transmissionSamplerSize.value.set(A.width,A.height),r.transmissionMap&&(c.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,c.transmissionMapTransform)),c.thickness.value=r.thickness,r.thicknessMap&&(c.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=r.attenuationDistance,c.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(c.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(c.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=r.specularIntensity,c.specularColor.value.copy(r.specularColor),r.specularColorMap&&(c.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,c.specularColorMapTransform)),r.specularIntensityMap&&(c.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,c.specularIntensityMapTransform))}function y(c,r){r.matcap&&(c.matcap.value=r.matcap)}function w(c,r){const A=n.get(r).light;c.referencePosition.value.setFromMatrixPosition(A.matrixWorld),c.nearDistance.value=A.shadow.camera.near,c.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gl(e,n,t,i){let s={},o={},d=[];const p=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function R(A,v){const T=v.program;i.uniformBlockBinding(A,T)}function M(A,v){let T=s[A.id];T===void 0&&(y(A),T=b(A),s[A.id]=T,A.addEventListener("dispose",c));const U=v.program;i.updateUBOMapping(A,U);const E=n.render.frame;o[A.id]!==E&&(_(A),o[A.id]=E)}function b(A){const v=m();A.__bindingPointIndex=v;const T=e.createBuffer(),U=A.__size,E=A.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,U,E),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,T),T}function m(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const v=s[A.id],T=A.uniforms,U=A.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let E=0,C=T.length;E<C;E++){const z=Array.isArray(T[E])?T[E]:[T[E]];for(let f=0,l=z.length;f<l;f++){const g=z[f];if(x(g,E,f,U)===!0){const D=g.__offset,B=Array.isArray(g.value)?g.value:[g.value];let G=0;for(let k=0;k<B.length;k++){const F=B[k],Z=w(F);typeof F=="number"||typeof F=="boolean"?(g.__data[0]=F,e.bufferSubData(e.UNIFORM_BUFFER,D+G,g.__data)):F.isMatrix3?(g.__data[0]=F.elements[0],g.__data[1]=F.elements[1],g.__data[2]=F.elements[2],g.__data[3]=0,g.__data[4]=F.elements[3],g.__data[5]=F.elements[4],g.__data[6]=F.elements[5],g.__data[7]=0,g.__data[8]=F.elements[6],g.__data[9]=F.elements[7],g.__data[10]=F.elements[8],g.__data[11]=0):(F.toArray(g.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,D,g.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(A,v,T,U){const E=A.value,C=v+"_"+T;if(U[C]===void 0)return typeof E=="number"||typeof E=="boolean"?U[C]=E:U[C]=E.clone(),!0;{const z=U[C];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return U[C]=E,!0}else if(z.equals(E)===!1)return z.copy(E),!0}return!1}function y(A){const v=A.uniforms;let T=0;const U=16;for(let C=0,z=v.length;C<z;C++){const f=Array.isArray(v[C])?v[C]:[v[C]];for(let l=0,g=f.length;l<g;l++){const D=f[l],B=Array.isArray(D.value)?D.value:[D.value];for(let G=0,k=B.length;G<k;G++){const F=B[G],Z=w(F),O=T%U,ne=O%Z.boundary,oe=O+ne;T+=ne,oe!==0&&U-oe<Z.storage&&(T+=U-oe),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=Z.storage}}}const E=T%U;return E>0&&(T+=U-E),A.__size=T,A.__cache={},this}function w(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function c(A){const v=A.target;v.removeEventListener("dispose",c);const T=d.indexOf(v.__bindingPointIndex);d.splice(T,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function r(){for(const A in s)e.deleteBuffer(s[A]);d=[],s={},o={}}return{bind:R,update:M,dispose:r}}export{Xn as P,ml as W,vl as a,gl as b,El as c,Sl as d,Ml as e,Tl as f,xl as g,Al as h,Rl as i,bl as j,Bl as k,Cl as l,wl as m,Ul as n,Pl as o,Dl as p,Ll as q,Il as r,yl as s,Nl as t,Uc as u,Gl as v,Ol as w,Fl as x};
