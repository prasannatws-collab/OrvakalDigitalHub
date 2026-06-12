import { useState } from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../../../core/context/LanguageContext';
import { Modal } from '../../../core/components/Modal';

// Import subcomponents
import { GovtOfficersList } from './GovtOfficersList';
import { SchoolsInfo } from './SchoolsInfo';
import { PostalServices } from './PostalServices';
import { BanksAtms } from './BanksAtms';
import { PoliceStation } from './PoliceStation';
import { HospitalPhc } from './HospitalPhc';
import { GovtSchemes } from './GovtSchemes';
import { GrievanceForm } from './GrievanceForm';
import { CommitteesList } from './CommitteesList';

import type { GovtOfficer, SchoolTeacher } from '../../../types';

type DirectorySubTab = 'govt' | 'education' | 'grievance' | 'postal' | 'banks' | 'police' | 'hospital' | 'schemes' | 'committees';

interface DirectoryDeskProps {
  searchQuery: string;
  subTab: DirectorySubTab | null;
  onSubTabChange: (subTab: DirectorySubTab | null) => void;
}

export const DirectoryDesk = ({
  searchQuery,
  subTab,
  onSubTabChange
}: DirectoryDeskProps) => {
  const { lang, getTxt } = useLanguage();

  const [selectedOfficer, setSelectedOfficer] = useState<GovtOfficer | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<SchoolTeacher | null>(null);

  if (subTab === null) {
    return (
      <div className="govt-menu-container">
        {/* 1. Grievance */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('grievance')}>
          <div className="govt-menu-icon">📝</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Panchayat Grievance Desk" : lang === 'te' ? "పంచాయతీ ఫిర్యాదుల విభాగం" : "पंचायत शिकायत डेस्क"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "Submit and track civic issues directly with local authorities."
                : lang === 'te'
                ? "వీధి దీపాలు, నీటి సరఫరా మరియు రోడ్ల సమస్యలపై ఫిర్యాదులు చేయండి."
                : "सड़क, पानी और बिजली जैसी नागरिक समस्याओं की शिकायत दर्ज करें।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>

        {/* 2. Offices & Officers */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('govt')}>
          <div className="govt-menu-icon">🏛️</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Government Offices & Officers" : lang === 'te' ? "ప్రభుత్వ కార్యాలయాలు & అధికారులు" : "सरकारी कार्यालय और अधिकारी"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "Contact information for local Panchayat, SRO, Tahsildar, and RBK."
                : lang === 'te'
                ? "సర్పంచ్, పంచాయతీ కార్యదర్శి, తహశీల్దార్ మరియు మీసేవ ఫోన్ నంబర్లు."
                : "सरपंच, पंचायत सचिव, तहसीलदार और मीसेवा के संपर्क नंबर।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>

        {/* 3. Schools */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('education')}>
          <div className="govt-menu-icon">🏫</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Schools & Education Centres" : lang === 'te' ? "పాఠశాలలు & విద్యా సంస్థలు" : "स्कूल और शिक्षा केंद्र"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "List of local schools, junior colleges, and tuition classes."
                : lang === 'te'
                ? "స్థానిక ప్రభుత్వ పాఠశాలలు, జూనియర్ కళాశాలలు మరియు కోచింగ్ వివరాలు."
                : "स्थानीय सरकारी स्कूलों, जूनियर कॉलेजों और कोचिंग सेंटरों का विवरण।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>

        {/* 4. Postal */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('postal')}>
          <div className="govt-menu-icon">📯</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Post Office & Postal Services" : lang === 'te' ? "తపాలా కార్యాలయం & సేవలు" : "डाकघर और डाक सेवाएं"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "Local Sub-Post office timings, services, pin codes, and staff."
                : lang === 'te'
                ? "ఓర్వకల్లు సబ్ పోస్ట్ ఆఫీస్ పని వేళలు, పిన్ కోడ్ మరియు సిబ్బంది సమాచారం."
                : "ओरवाकल उप-डाकघर का समय, पिन कोड और सेवाओं की जानकारी।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>

        {/* 5. Banks */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('banks')}>
          <div className="govt-menu-icon">🏦</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Banks & ATMs" : lang === 'te' ? "బ్యాంకులు & ఏటీఎంలు" : "बैंक और एटीएम"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "Local bank branches (SBI, APGB) with IFSC and 24/7 ATM status."
                : lang === 'te'
                ? "స్థానిక బ్యాంకు బ్రాంచులు, ఐఎఫ్ఎస్ కోడ్ మరియు ఏటీఎంల తాజా సమాచారం."
                : "स्थानीय बैंक शाखाओं, आईएफएससी कोड और एटीएम की स्थिति।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>

        {/* 6. Schemes */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('schemes')}>
          <div className="govt-menu-icon">📜</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Government Schemes" : lang === 'te' ? "ప్రభుత్వ పథకాలు" : "सरकारी योजनाएं"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "Browse welfare, student, farmer, and business empowerment schemes."
                : lang === 'te'
                ? "రైతులు, విద్యార్థులు, మహిళలు మరియు వ్యాపార ప్రభుత్వ పథకాల వివరాలు."
                : "कल्याणकारी, छात्र, किसान और व्यावसायिक सशक्तिकरण योजनाओं की जानकारी।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>

        {/* 7. Police Station */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('police')}>
          <div className="govt-menu-icon">👮</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Police Station & Security" : lang === 'te' ? "పోలీస్ స్టేషన్ & భద్రత" : "पुलिस स्टेशन और सुरक्षा"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "Contact information, Sub-Inspector details, and services of Orvakal PS."
                : lang === 'te'
                ? "ఓర్వకల్లు పోలీస్ స్టేషన్ ఎస్.ఐ ఫోన్ నంబర్, సిబ్బంది మరియు సేవల వివరాలు."
                : "ओरवाकल पुलिस स्टेशन के एसआई, स्टाफ और सेवाओं की जानकारी।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>

        {/* 8. Hospital & PHC */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('hospital')}>
          <div className="govt-menu-icon">🏥</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Primary Health Center (PHC)" : lang === 'te' ? "ప్రాథమిక ఆరోగ్య కేంద్రం (PHC)" : "प्राथमिक स्वास्थ्य केंद्र (PHC)"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "OPD timings, bed capacity, doctors list, and medical facilities."
                : lang === 'te'
                ? "ఓర్వకల్లు ప్రభుత్వ ఆసుపత్రి పని వేళలు, వైద్యులు మరియు వసతుల వివరాలు."
                : "ओरवाकल सरकारी अस्पताल के समय, डॉक्टरों और सुविधाओं का विवरण।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>

        {/* 9. Committees */}
        <div className="govt-menu-card" onClick={() => onSubTabChange('committees')}>
          <div className="govt-menu-icon">👥</div>
          <div className="govt-menu-info">
            <span className="govt-menu-title">
              {lang === 'en' ? "Committees & Clubs" : lang === 'te' ? "కమిటీలు & క్లబ్‌లు" : "समितियां और क्लब"}
            </span>
            <span className="govt-menu-desc">
              {lang === 'en'
                ? "Village administration, temple, youth, security and business committees."
                : lang === 'te'
                ? "దేవాలయం, రక్షణ, విద్యా, క్రీడలు మరియు వ్యాపార కమిటీల వివరాలు."
                : "मंदिर, सुरक्षा, शिक्षा, खेल और व्यावसायिक समितियों का विवरण।"}
            </span>
          </div>
          <span className="govt-menu-arrow">➡️</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
        <button
          className="btn btn-secondary"
          style={{ flex: 'none', padding: '6px 12px', fontSize: '0.7rem' }}
          onClick={() => onSubTabChange(null)}
        >
          ⬅️ {lang === 'en' ? "Back to Govt Directory" : lang === 'te' ? "తిరిగి ప్రభుత్వ సమాచార మెనూకు" : "सरकारी निर्देशिका पर वापस जाएं"}
        </button>
      </div>

      {/* Render Subtabs */}
      {subTab === 'govt' && (
        <GovtOfficersList searchQuery={searchQuery} onOfficerSelect={setSelectedOfficer} />
      )}
      {subTab === 'education' && (
        <SchoolsInfo searchQuery={searchQuery} onSchoolSelect={setSelectedSchool} />
      )}
      {subTab === 'postal' && <PostalServices />}
      {subTab === 'banks' && <BanksAtms />}
      {subTab === 'police' && <PoliceStation />}
      {subTab === 'hospital' && <HospitalPhc />}
      {subTab === 'schemes' && <GovtSchemes />}
      {subTab === 'grievance' && <GrievanceForm />}
      {subTab === 'committees' && <CommitteesList />}

      {/* Detail Modals */}
      <Modal isOpen={selectedOfficer !== null} onClose={() => setSelectedOfficer(null)} title={lang === 'en' ? "Government Officer" : lang === 'te' ? "ప్రభుత్వ అధికారి" : "सरकारी अधिकारी"}>
        {selectedOfficer && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 style={{ fontSize: '0.9rem', margin: 0 }}>{getTxt(selectedOfficer.name)}</h4>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'hsl(var(--muted-foreground))', margin: 0 }}>
              {getTxt(selectedOfficer.designation)}
            </p>
            <div style={{ fontSize: '0.75rem' }}>
              <strong>Department:</strong> {getTxt(selectedOfficer.department)}
            </div>
            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
              <div><strong>Phone:</strong> {selectedOfficer.phone}</div>
              <div><strong>Email:</strong> {selectedOfficer.email}</div>
              <div><strong>Office Location:</strong> {selectedOfficer.location ? getTxt(selectedOfficer.location) : "Orvakal Panchayat HQ"}</div>
              {selectedOfficer.timings && <div><strong>Working Hours:</strong> {getTxt(selectedOfficer.timings)}</div>}
            </div>
            {selectedOfficer.servicesDescription && (
              <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', fontSize: '0.75rem' }}>
                <strong>Services Provided:</strong>
                <p style={{ margin: '4px 0 0 0', lineHeight: 1.3, color: 'hsl(var(--muted-foreground))' }}>
                  {getTxt(selectedOfficer.servicesDescription)}
                </p>
              </div>
            )}
            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px' }}>
              <strong style={{ fontSize: '0.75rem' }}>Authorized Permissions:</strong>
              <ul style={{ paddingLeft: '18px', fontSize: '0.7rem', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px', marginBlockEnd: 0 }}>
                {selectedOfficer.permissions.map((p, idx) => <li key={idx}>{getTxt(p)}</li>)}
              </ul>
            </div>
            <a
              href={`tel:${selectedOfficer.phone}`}
              className="btn btn-primary"
              style={{ textDecoration: 'none', marginTop: '10px', display: 'block', textAlign: 'center' }}
            >
              <Phone size={12} /> Call Office
            </a>
          </div>
        )}
      </Modal>

      <Modal isOpen={selectedSchool !== null} onClose={() => setSelectedSchool(null)} title={lang === 'en' ? "School Details" : lang === 'te' ? "పాఠశాల వివరాలు" : "स्कूल विवरण"}>
        {selectedSchool && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 style={{ fontSize: '0.9rem', margin: 0 }}>{getTxt(selectedSchool.name)}</h4>
            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'hsl(var(--muted-foreground))', margin: 0 }}>
              {getTxt(selectedSchool.schoolName)}
            </p>
            <div style={{ fontSize: '0.75rem' }}>
              <strong>Medium / Scope:</strong> {getTxt(selectedSchool.subject)}
            </div>
            <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
              {selectedSchool.principal && <div><strong>Principal / In-charge:</strong> {getTxt(selectedSchool.principal)}</div>}
              {selectedSchool.address && <div><strong>Address:</strong> {getTxt(selectedSchool.address)}</div>}
              {selectedSchool.timings && <div><strong>School Timings:</strong> {getTxt(selectedSchool.timings)}</div>}
              {selectedSchool.establishedYear && <div><strong>Established:</strong> {selectedSchool.establishedYear}</div>}
              <div><strong>Phone:</strong> {selectedSchool.phone}</div>
            </div>
            {selectedSchool.facilities && selectedSchool.facilities.length > 0 && (
              <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '8px' }}>
                <strong style={{ fontSize: '0.75rem' }}>Facilities Available:</strong>
                <ul style={{ paddingLeft: '18px', fontSize: '0.7rem', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px', marginBlockEnd: 0 }}>
                  {selectedSchool.facilities.map((f, idx) => <li key={idx}>{getTxt(f)}</li>)}
                </ul>
              </div>
            )}
            <a
              href={`tel:${selectedSchool.phone}`}
              className="btn btn-primary"
              style={{ textDecoration: 'none', marginTop: '10px', display: 'block', textAlign: 'center' }}
            >
              <Phone size={12} /> Contact School
            </a>
          </div>
        )}
      </Modal>

    </div>
  );
};
