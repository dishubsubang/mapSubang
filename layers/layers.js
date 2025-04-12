var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINKEC_1 = new ol.format.GeoJSON();
var features_ADMINKEC_1 = format_ADMINKEC_1.readFeatures(json_ADMINKEC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINKEC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINKEC_1.addFeatures(features_ADMINKEC_1);
var lyr_ADMINKEC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINKEC_1, 
                style: style_ADMINKEC_1,
                popuplayertitle: 'ADMINKEC',
                interactive: true,
                title: '<img src="styles/legend/ADMINKEC_1.png" /> ADMINKEC'
            });
var format_BLACKAREA_2 = new ol.format.GeoJSON();
var features_BLACKAREA_2 = format_BLACKAREA_2.readFeatures(json_BLACKAREA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLACKAREA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKAREA_2.addFeatures(features_BLACKAREA_2);
var lyr_BLACKAREA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKAREA_2, 
                style: style_BLACKAREA_2,
                popuplayertitle: 'BLACKAREA',
                interactive: true,
                title: '<img src="styles/legend/BLACKAREA_2.png" /> BLACKAREA'
            });
var format_BLACKLINK_3 = new ol.format.GeoJSON();
var features_BLACKLINK_3 = format_BLACKLINK_3.readFeatures(json_BLACKLINK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLACKLINK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKLINK_3.addFeatures(features_BLACKLINK_3);
var lyr_BLACKLINK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKLINK_3, 
                style: style_BLACKLINK_3,
                popuplayertitle: 'BLACKLINK',
                interactive: true,
                title: '<img src="styles/legend/BLACKLINK_3.png" /> BLACKLINK'
            });
var format_RUMAHSAKIT_4 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_4 = format_RUMAHSAKIT_4.readFeatures(json_RUMAHSAKIT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_4.addFeatures(features_RUMAHSAKIT_4);
var lyr_RUMAHSAKIT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_4, 
                style: style_RUMAHSAKIT_4,
                popuplayertitle: 'RUMAH SAKIT',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_4.png" /> RUMAH SAKIT'
            });
var format_NEWPUSKESMAS_5 = new ol.format.GeoJSON();
var features_NEWPUSKESMAS_5 = format_NEWPUSKESMAS_5.readFeatures(json_NEWPUSKESMAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEWPUSKESMAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEWPUSKESMAS_5.addFeatures(features_NEWPUSKESMAS_5);
var lyr_NEWPUSKESMAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NEWPUSKESMAS_5, 
                style: style_NEWPUSKESMAS_5,
                popuplayertitle: 'NEW PUSKESMAS',
                interactive: true,
                title: '<img src="styles/legend/NEWPUSKESMAS_5.png" /> NEW PUSKESMAS'
            });
var format_JalanPerkotaanSBG_6 = new ol.format.GeoJSON();
var features_JalanPerkotaanSBG_6 = format_JalanPerkotaanSBG_6.readFeatures(json_JalanPerkotaanSBG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerkotaanSBG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerkotaanSBG_6.addFeatures(features_JalanPerkotaanSBG_6);
var lyr_JalanPerkotaanSBG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerkotaanSBG_6, 
                style: style_JalanPerkotaanSBG_6,
                popuplayertitle: 'JalanPerkotaanSBG',
                interactive: true,
                title: '<img src="styles/legend/JalanPerkotaanSBG_6.png" /> JalanPerkotaanSBG'
            });
var format_Jalan_Kolektor_7 = new ol.format.GeoJSON();
var features_Jalan_Kolektor_7 = format_Jalan_Kolektor_7.readFeatures(json_Jalan_Kolektor_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Kolektor_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Kolektor_7.addFeatures(features_Jalan_Kolektor_7);
var lyr_Jalan_Kolektor_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Kolektor_7, 
                style: style_Jalan_Kolektor_7,
                popuplayertitle: 'Jalan_Kolektor',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Kolektor_7.png" /> Jalan_Kolektor'
            });
var format_JalanArteri_8 = new ol.format.GeoJSON();
var features_JalanArteri_8 = format_JalanArteri_8.readFeatures(json_JalanArteri_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanArteri_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanArteri_8.addFeatures(features_JalanArteri_8);
var lyr_JalanArteri_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanArteri_8, 
                style: style_JalanArteri_8,
                popuplayertitle: 'Jalan Arteri',
                interactive: true,
                title: '<img src="styles/legend/JalanArteri_8.png" /> Jalan Arteri'
            });
var format_JALAN_TOL_9 = new ol.format.GeoJSON();
var features_JALAN_TOL_9 = format_JALAN_TOL_9.readFeatures(json_JALAN_TOL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_TOL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_TOL_9.addFeatures(features_JALAN_TOL_9);
var lyr_JALAN_TOL_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_TOL_9, 
                style: style_JALAN_TOL_9,
                popuplayertitle: 'JALAN_TOL',
                interactive: true,
                title: '<img src="styles/legend/JALAN_TOL_9.png" /> JALAN_TOL'
            });
var format_JalanKab_10 = new ol.format.GeoJSON();
var features_JalanKab_10 = format_JalanKab_10.readFeatures(json_JalanKab_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKab_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKab_10.addFeatures(features_JalanKab_10);
var lyr_JalanKab_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKab_10, 
                style: style_JalanKab_10,
                popuplayertitle: 'JalanKab',
                interactive: true,
                title: '<img src="styles/legend/JalanKab_10.png" /> JalanKab'
            });
var format_NEWBLACKSPOT_11 = new ol.format.GeoJSON();
var features_NEWBLACKSPOT_11 = format_NEWBLACKSPOT_11.readFeatures(json_NEWBLACKSPOT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEWBLACKSPOT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEWBLACKSPOT_11.addFeatures(features_NEWBLACKSPOT_11);
var lyr_NEWBLACKSPOT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NEWBLACKSPOT_11, 
                style: style_NEWBLACKSPOT_11,
                popuplayertitle: 'NEWBLACKSPOT',
                interactive: true,
                title: '<img src="styles/legend/NEWBLACKSPOT_11.png" /> NEWBLACKSPOT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINKEC_1.setVisible(true);lyr_BLACKAREA_2.setVisible(true);lyr_BLACKLINK_3.setVisible(true);lyr_RUMAHSAKIT_4.setVisible(true);lyr_NEWPUSKESMAS_5.setVisible(true);lyr_JalanPerkotaanSBG_6.setVisible(true);lyr_Jalan_Kolektor_7.setVisible(true);lyr_JalanArteri_8.setVisible(true);lyr_JALAN_TOL_9.setVisible(true);lyr_JalanKab_10.setVisible(true);lyr_NEWBLACKSPOT_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINKEC_1,lyr_BLACKAREA_2,lyr_BLACKLINK_3,lyr_RUMAHSAKIT_4,lyr_NEWPUSKESMAS_5,lyr_JalanPerkotaanSBG_6,lyr_Jalan_Kolektor_7,lyr_JalanArteri_8,lyr_JALAN_TOL_9,lyr_JalanKab_10,lyr_NEWBLACKSPOT_11];
lyr_ADMINKEC_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'NEGARA': 'NEGARA', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'J.KEJADIAN': 'J.KEJADIAN', 'J.KORBAN': 'J.KORBAN', 'MD': 'MD', 'LB': 'LB', 'LR': 'LR', });
lyr_BLACKAREA_2.set('fieldAliases', {'BLACK AREA-Sheet1_No': 'BLACK AREA-Sheet1_No', 'BLACK AREA-Sheet1_Nama': 'BLACK AREA-Sheet1_Nama', 'BLACK AREA-Sheet1_Daftar Wilayah (Desa/Kelurahan)': 'BLACK AREA-Sheet1_Daftar Wilayah (Desa/Kelurahan)', 'BLACK AREA-Sheet1_Daftar Black Link': 'BLACK AREA-Sheet1_Daftar Black Link', 'BLACK AREA-Sheet1_Daftar Titik Black Spot': 'BLACK AREA-Sheet1_Daftar Titik Black Spot', 'BLACK AREA-Sheet1_Panjang Jalan Total Black Link (Meter)': 'BLACK AREA-Sheet1_Panjang Jalan Total Black Link (Meter)', });
lyr_BLACKLINK_3.set('fieldAliases', {'Id': 'Id', 'NAMA_BLACK': 'NAMA_BLACK', 'PANJANG(M)': 'PANJANG(M)', 'BLACK AREA-Sheet1_No': 'BLACK AREA-Sheet1_No', 'BLACK AREA-Sheet1_Nama': 'BLACK AREA-Sheet1_Nama', 'BLACK AREA-Sheet1_Daftar Wilayah (Desa/Kelurahan)': 'BLACK AREA-Sheet1_Daftar Wilayah (Desa/Kelurahan)', 'BLACK AREA-Sheet1_Daftar Black Link': 'BLACK AREA-Sheet1_Daftar Black Link', 'BLACK AREA-Sheet1_Daftar Titik Black Spot': 'BLACK AREA-Sheet1_Daftar Titik Black Spot', 'BLACK AREA-Sheet1_Panjang Jalan Total Black Link (Meter)': 'BLACK AREA-Sheet1_Panjang Jalan Total Black Link (Meter)', });
lyr_RUMAHSAKIT_4.set('fieldAliases', {'NO': 'NO', 'NAMA RUMAH SAKIT': 'NAMA RUMAH SAKIT', 'ALAMAT': 'ALAMAT', 'NAMA DIREKTUR': 'NAMA DIREKTUR', 'TIPE': 'TIPE', 'JUMLAH PEGAWAI': 'JUMLAH PEGAWAI', 'x': 'x', 'y': 'y', });
lyr_NEWPUSKESMAS_5.set('fieldAliases', {'NO': 'NO', 'KOORDINAT': 'KOORDINAT', 'FASKES': 'FASKES', 'ALAMAT': 'ALAMAT', 'NO TLP': 'NO TLP', 'KODE': 'KODE', 'JENIS': 'JENIS', 'PELAYANAN': 'PELAYANAN', 'Maps': 'Maps', 'y': 'y', 'x': 'x', });
lyr_JalanPerkotaanSBG_6.set('fieldAliases', {'NO_RUAS_1': 'NO_RUAS_1', 'NM_RUAS_1': 'NM_RUAS_1', 'Status_1': 'Status_1', 'Panjang_KM': 'Panjang_KM', });
lyr_Jalan_Kolektor_7.set('fieldAliases', {'NAMA JALAN': 'NAMA JALAN', 'STATUS': 'STATUS', 'V': 'V', 'LCODE': 'LCODE', 'C': 'C', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanArteri_8.set('fieldAliases', {'STATUS': 'STATUS', 'NAMA JALAN': 'NAMA JALAN', 'LCODE': 'LCODE', 'C': 'C', 'SHAPE_Leng': 'SHAPE_Leng', 'V': 'V', 'FUNGSI': 'FUNGSI', });
lyr_JALAN_TOL_9.set('fieldAliases', {'Id': 'Id', 'NAMA': 'NAMA', 'PANJANG(M)': 'PANJANG(M)', });
lyr_JalanKab_10.set('fieldAliases', {'NO_RUAS_1': 'NO_RUAS_1', 'NM_RUAS_1': 'NM_RUAS_1', 'Status_1': 'Status_1', 'Panjang_KM': 'Panjang_KM', });
lyr_NEWBLACKSPOT_11.set('fieldAliases', {'No': 'No', 'Koordinat': 'Koordinat', 'Nama': 'Nama', 'Uraian Haz': 'Uraian Haz', 'Risiko': 'Risiko', 'Jenis Baha': 'Jenis Baha', 'Faskes Ter': 'Faskes Ter', 'Jarak Fask': 'Jarak Fask', 'Maps Faske': 'Maps Faske', 'Maps Black': 'Maps Black', 'Geometri J': 'Geometri J', 'Visualisas': 'Visualisas', 'X': 'X', 'Y': 'Y', });
lyr_ADMINKEC_1.set('fieldImages', {'WADMKC': '', 'NEGARA': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'J.KEJADIAN': '', 'J.KORBAN': '', 'MD': '', 'LB': '', 'LR': '', });
lyr_BLACKAREA_2.set('fieldImages', {'BLACK AREA-Sheet1_No': 'Range', 'BLACK AREA-Sheet1_Nama': 'TextEdit', 'BLACK AREA-Sheet1_Daftar Wilayah (Desa/Kelurahan)': 'TextEdit', 'BLACK AREA-Sheet1_Daftar Black Link': 'TextEdit', 'BLACK AREA-Sheet1_Daftar Titik Black Spot': 'TextEdit', 'BLACK AREA-Sheet1_Panjang Jalan Total Black Link (Meter)': 'TextEdit', });
lyr_BLACKLINK_3.set('fieldImages', {'Id': 'Range', 'NAMA_BLACK': 'TextEdit', 'PANJANG(M)': 'TextEdit', 'BLACK AREA-Sheet1_No': 'Range', 'BLACK AREA-Sheet1_Nama': 'TextEdit', 'BLACK AREA-Sheet1_Daftar Wilayah (Desa/Kelurahan)': 'TextEdit', 'BLACK AREA-Sheet1_Daftar Black Link': 'TextEdit', 'BLACK AREA-Sheet1_Daftar Titik Black Spot': 'TextEdit', 'BLACK AREA-Sheet1_Panjang Jalan Total Black Link (Meter)': 'TextEdit', });
lyr_RUMAHSAKIT_4.set('fieldImages', {'NO': 'Range', 'NAMA RUMAH SAKIT': 'TextEdit', 'ALAMAT': 'TextEdit', 'NAMA DIREKTUR': 'TextEdit', 'TIPE': 'TextEdit', 'JUMLAH PEGAWAI': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_NEWPUSKESMAS_5.set('fieldImages', {'NO': '', 'KOORDINAT': '', 'FASKES': '', 'ALAMAT': '', 'NO TLP': '', 'KODE': '', 'JENIS': '', 'PELAYANAN': '', 'Maps': '', 'y': '', 'x': '', });
lyr_JalanPerkotaanSBG_6.set('fieldImages', {'NO_RUAS_1': '', 'NM_RUAS_1': '', 'Status_1': '', 'Panjang_KM': '', });
lyr_Jalan_Kolektor_7.set('fieldImages', {'NAMA JALAN': '', 'STATUS': '', 'V': '', 'LCODE': '', 'C': '', 'SHAPE_Leng': '', });
lyr_JalanArteri_8.set('fieldImages', {'STATUS': '', 'NAMA JALAN': '', 'LCODE': '', 'C': '', 'SHAPE_Leng': '', 'V': '', 'FUNGSI': '', });
lyr_JALAN_TOL_9.set('fieldImages', {'Id': '', 'NAMA': '', 'PANJANG(M)': '', });
lyr_JalanKab_10.set('fieldImages', {'NO_RUAS_1': '', 'NM_RUAS_1': '', 'Status_1': '', 'Panjang_KM': '', });
lyr_NEWBLACKSPOT_11.set('fieldImages', {'No': '', 'Koordinat': '', 'Nama': '', 'Uraian Haz': '', 'Risiko': '', 'Jenis Baha': '', 'Faskes Ter': '', 'Jarak Fask': '', 'Maps Faske': '', 'Maps Black': '', 'Geometri J': '', 'Visualisas': '', 'X': '', 'Y': '', });
lyr_ADMINKEC_1.set('fieldLabels', {'WADMKC': 'no label', 'NEGARA': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'J.KEJADIAN': 'no label', 'J.KORBAN': 'no label', 'MD': 'no label', 'LB': 'no label', 'LR': 'no label', });
lyr_BLACKAREA_2.set('fieldLabels', {'BLACK AREA-Sheet1_No': 'no label', 'BLACK AREA-Sheet1_Nama': 'no label', 'BLACK AREA-Sheet1_Daftar Wilayah (Desa/Kelurahan)': 'no label', 'BLACK AREA-Sheet1_Daftar Black Link': 'no label', 'BLACK AREA-Sheet1_Daftar Titik Black Spot': 'no label', 'BLACK AREA-Sheet1_Panjang Jalan Total Black Link (Meter)': 'no label', });
lyr_BLACKLINK_3.set('fieldLabels', {'Id': 'no label', 'NAMA_BLACK': 'no label', 'PANJANG(M)': 'no label', 'BLACK AREA-Sheet1_No': 'no label', 'BLACK AREA-Sheet1_Nama': 'no label', 'BLACK AREA-Sheet1_Daftar Wilayah (Desa/Kelurahan)': 'no label', 'BLACK AREA-Sheet1_Daftar Black Link': 'no label', 'BLACK AREA-Sheet1_Daftar Titik Black Spot': 'no label', 'BLACK AREA-Sheet1_Panjang Jalan Total Black Link (Meter)': 'no label', });
lyr_RUMAHSAKIT_4.set('fieldLabels', {'NO': 'no label', 'NAMA RUMAH SAKIT': 'no label', 'ALAMAT': 'no label', 'NAMA DIREKTUR': 'no label', 'TIPE': 'no label', 'JUMLAH PEGAWAI': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_NEWPUSKESMAS_5.set('fieldLabels', {'NO': 'no label', 'KOORDINAT': 'no label', 'FASKES': 'no label', 'ALAMAT': 'no label', 'NO TLP': 'no label', 'KODE': 'no label', 'JENIS': 'no label', 'PELAYANAN': 'no label', 'Maps': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_JalanPerkotaanSBG_6.set('fieldLabels', {'NO_RUAS_1': 'no label', 'NM_RUAS_1': 'no label', 'Status_1': 'no label', 'Panjang_KM': 'no label', });
lyr_Jalan_Kolektor_7.set('fieldLabels', {'NAMA JALAN': 'no label', 'STATUS': 'no label', 'V': 'no label', 'LCODE': 'no label', 'C': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JalanArteri_8.set('fieldLabels', {'STATUS': 'no label', 'NAMA JALAN': 'no label', 'LCODE': 'no label', 'C': 'no label', 'SHAPE_Leng': 'no label', 'V': 'no label', 'FUNGSI': 'no label', });
lyr_JALAN_TOL_9.set('fieldLabels', {'Id': 'no label', 'NAMA': 'no label', 'PANJANG(M)': 'no label', });
lyr_JalanKab_10.set('fieldLabels', {'NO_RUAS_1': 'no label', 'NM_RUAS_1': 'no label', 'Status_1': 'no label', 'Panjang_KM': 'no label', });
lyr_NEWBLACKSPOT_11.set('fieldLabels', {'No': 'no label', 'Koordinat': 'no label', 'Nama': 'no label', 'Uraian Haz': 'no label', 'Risiko': 'no label', 'Jenis Baha': 'no label', 'Faskes Ter': 'no label', 'Jarak Fask': 'no label', 'Maps Faske': 'no label', 'Maps Black': 'no label', 'Geometri J': 'no label', 'Visualisas': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_NEWBLACKSPOT_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});