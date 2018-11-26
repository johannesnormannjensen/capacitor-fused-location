
  Pod::Spec.new do |s|
    s.name = 'CapacitorFusedLocation'
    s.version = '0.0.1'
    s.summary = 'Gives access to Google Play Services location. (Android only)'
    s.license = 'MIT'
    s.homepage = 'https://github.com/johannesnormannjensen/capacitor-fused-location.git'
    s.author = 'Johannes Normann Jensen'
    s.source = { :git => 'https://github.com/johannesnormannjensen/capacitor-fused-location.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end