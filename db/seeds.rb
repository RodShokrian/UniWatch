# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create!(username: "Guest", password: "guest123")

University.destroy_all
response = HTTParty.get('https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=AGyC1nUMi9K1Dp0PEWOddfUSVxERBNq4dEk6T3fP&2014.admissions.sat_scores.average.overall__range=1200..&_fields=school.name,school.city,school.state,school.zip,school.school_url,school.price_calculator_url,location.lat,location.lon,school.minority_serving.historically_black,2014.admissions.sat_scores.average.overall,2014.admissions.admission_rate.overall,2014.student.enrollment.all,2014.cost.attendance.academic_year,2014.cost.tuition.in_state,2014.cost.tuition.out_of_state,2014.aid.median_debt.completers.overall&_sort=2014.admissions.sat_scores.average.overall:desc&_per_page=100')

data_array = response["results"]
parsed_array = []
data_array.map! do |university|
  key_mapper = {}
  university.map do |field, value|
    key_mapper[field] = field.gsub(/2014\./, '').gsub(/\./, '_')
  end
  university.map {|field, value| [key_mapper[field], value] }.to_h
end

data_array.each do |university|
  u = University.create!(university.keys[0] => university.values[0],
                      university.keys[1] => university.values[1],
                      university.keys[2] => university.values[2],
                      university.keys[3] => university.values[3],
                      university.keys[4] => university.values[4],
                      university.keys[5] => university.values[5],
                      university.keys[6] => university.values[6],
                      university.keys[7] => university.values[7],
                      university.keys[8] => university.values[8],
                      university.keys[9] => university.values[9],
                      university.keys[10] => university.values[10],
                      university.keys[11] => university.values[11],
                      university.keys[12] => university.values[12],
                      university.keys[13] => university.values[13],
                      university.keys[14] => university.values[14],
                      university.keys[15] => university.values[15]
                      )
end

img_array = [
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425354/447-caltech_seal-200w_o7zqhe.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425407/university.seal.rgb.maroon_fqrsqg.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425487/892877d47ba3695d5e9a68f44a325229_xd13nn.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425535/Harvey_MC_H_fek9mm.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425573/482px-MIT_Seal.svg_rbswch.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425620/1200px-Yale_University_Shield_1.svg_b53cab.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425652/Shield_p27fuy.gif",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425711/Vanderbilt_University_Logo_atqulq.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425748/1024px-WashU_St._Louis_seal.svg_iy2cem.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425797/franklin-w-olin-college-of-engineering_o4uekk.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425830/Columbia_University_Seal_qhnuof.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425858/SU_SealColor_web3_hsrcbp.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425880/1200px-Northwestern_University_seal.svg_kdxs3a.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425931/RiceNmedal_220_abr4a7.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500425959/collegemarkstandalone_zhcmem.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426000/color-trans-18_tptylw.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426040/1200px-Williams_College_Seal.svg_up7s3v.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426075/arms1_rta8kk.gif",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426223/1024px-University_of_Notre_Dame_seal__282_29.svg_mltkjj.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426257/Seal_of_Dartmouth_College_gqdcw7.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426328/216px-Johns_Hopkins_University_seal.svg_bs2pwp.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426355/2009_seal_rgb_310067_wh7tbk.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426382/full-color-seal-min_hjlqjn.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426466/brown_bjv3l3.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426495/garnetseal200_ysbl5s.gif",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426518/BigSealOnWhite_c5kxuk.gif",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426628/1200px-Cornell_University_seal.svg_fsedaf.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426653/1024px-Formal_Seal_of_Haverford_College_2C_Haverford_Township_2C_PA_2C_USA.svg_bo3gbi.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426680/1000px-Northeastern_University_seal.svg_xd7q3l.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426711/webb_icon_rgb_dtt0tl.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426747/CMC_Seal_black_d7nadz.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426788/seal-georgetown_odgpdh.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500426813/31972_nc37pi.gif",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429080/1024px-Vassar_College_Seal.svg_egbyb2.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429111/2000px-Georgia_Tech_seal.svg_ffphc3.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429260/1230px-Grinnell_College_seal.svg_oitidt.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429294/web-seal_nym1eb.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429319/Hamilton_College_seal_clork5.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429342/a94fc2caa5c0a9b400415acedfe89ad5_yrbs1a.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429426/8247cee5935cb7fcf2e286586b12a4ea_fyk01b.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429460/10827550l_nt34nk.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429494/ucbseal_139_540_p9srpo.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429527/61e222e435fcbf9d0c707ad17d9aac31_slisac.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429569/1200px-University_of_Michigan_seal.svg_ecdbgl.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429596/1200px-Boston_College_Seal.svg_q1tu6z.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429625/middsealThumbnail_s7ytxw.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429659/uniSeal_fk7fvl.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429684/wmseal_qxifee.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429718/1024px-Rensselaer_at_Hartford_Seal.svg_ykjrkx.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429749/Colgate_Seal_in_color_ffahcc.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429773/1024px-Brandeis_University_seal.svg_uvrhuj.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429800/220px-Emory_University_Seal_k5v4uu.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429823/b1bbfeb300761ea076909392524bde18_mg5cpi.gif",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429851/UVA-seal_ziybns.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429879/MacSeal_qe5hcn.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429906/1029px-Formal_Seal_of_Oberlin_College_2C_Oberlin_2C_OH_2C_USA.svg_g5fyvg.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429938/1024px-Seal_of_Stevens_Institute_of_Technology.svg_i3aoid.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429961/1012px-New_York_University_Seal.svg_s8vqm8.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500429993/BarnZmedalGold_220_ghwlkm.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430018/TulaneSealColor_dgiqcg.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430049/davidsonseal_ws9eqk.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430076/University_of_Richmond_logo_m5ach5.gif",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430111/CSM_Seal_ik44mx.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430138/1024px-Colby_College_Seal.svg_q3mlzr.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430167/KnycNmedal_220_evywit.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430187/ucla-seal-main-31_bw6n4r.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430224/1024px-UMiamiSeal.svg_r8ci4v.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430269/1280px-Jewish_Theological_Seminary_of_America_logo_with_name.svg_r29isg.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430297/bluesealhires_dukorc.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430334/UIUC_Seal_University_of_Illinois_at_Urbana-Champaign_ewglxu.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430374/OurSealMotto_b_Hallmarks_bofy7u.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430399/1200px-St._John_27s_College.svg_icirrj.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430422/A3E84A34-CC5C-7A82-C07470F038A6308A_def_kwi0t0.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430445/Bucknellseal_irtwog.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430470/smuseal_ppgzhw.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430496/University_of_Maryland_Seal.svg_ej3prx.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430533/1024px-UCSD_Seal.svg_knrsxd.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430555/brynmawr_seal_200pixels_hhgco5.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430592/VillanovaU_Seal_ffh23v.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430643/JCVztFWA_400x400_kc49j0.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430672/926e34b0210a64690faac70002b82bac_f2ugxx.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430694/RoseSeal_glxzvw.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430721/1024px-Formal_Seal_of_Occidental_College_2C_Los_Angeles_2C_USA.svg_kxsxmp.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430741/1024px-Boston_University_seal.svg_gpxiih.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430767/Seal_of_Lafayette_College_r9gidp.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430790/480px-George_Washington_University_seal.svg_xeqfco.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430813/1024px-University_of_Texas_at_Austin_seal.svg_apqeu9.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430857/Seal_Rhodes_style2_2color_2004.jpg.preview_qfvosc.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430879/TU_dnzcs4.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430906/150px-StOlafSeal_denfdr.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430931/Seal_of_the_Ohio_State_University_anotrg.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430964/2000px-BYU_Medallion_Logo.svg_codf6y.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500430991/Binghamton_Seal_yxaww6.gif",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500431026/University-of-Wisconsin-Madison_large_cwvwxv.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500431058/historic_emblem_optimized_pwjyfi.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500431109/TrunZmedalGold_220_usfmxy.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500431137/image-4_tlmv2p.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500431165/1010px-University_of_Pittsburgh_seal.svg_l8yiy3.png",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500431207/New-seal-300x288_xb5goi.jpg",
"http://res.cloudinary.com/dxucikdys/image/upload/v1500431243/1200px-University_of_Florida_seal.svg_unefhn.png"
]

University.all.each_with_index do |university, idx|
  university.update(img_url: img_array[idx])
end
