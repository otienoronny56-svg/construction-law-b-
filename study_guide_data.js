// EACQ 3214 & 3114 Construction Law Study Guide Content Data
window.STUDY_SECTIONS = [
    {
        id: "sec-1",
        badge: "Topic II: Part A",
        title: "Introduction, Natural Persons & Citizenship",
        content: `
            <p><strong>A. Introduction to Legal Capacity</strong></p>
            <p>Every business transaction relies on the legal status of the parties involved and their capacity to create contractual relationships. The law organizes entities into categories called <strong>persons</strong>.</p>
            <p>A person is anyone or anything that the law recognizes as having legal rights and obligations. There are two categories of persons in law:</p>
            <ul class="custom-list">
                <li><strong>Natural Persons:</strong> Individual human beings who naturally possess legal personality.</li>
                <li><strong>Legal/Artificial Persons:</strong> Non-human entities, like limited companies, which are granted personality by complying with statutory rules.</li>
            </ul>

            <!-- DIAGRAM 1: Business Associations Classification Tree -->
            <div class="diagram-container">
                <h4 style="margin-bottom: 12px; color: var(--primary);">Figure 1: Classification of Business Associations</h4>
                <svg class="diagram-svg" viewBox="0 0 760 230">
                    <defs>
                        <marker id="arrow-fig1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-muted)" />
                        </marker>
                    </defs>
                    <!-- Connection Lines -->
                    <path d="M 380 40 L 180 75" class="diagram-line" marker-end="url(#arrow-fig1)" />
                    <path d="M 380 40 L 580 75" class="diagram-line" marker-end="url(#arrow-fig1)" />
                    <path d="M 180 110 L 80 165" class="diagram-line" marker-end="url(#arrow-fig1)" />
                    <path d="M 180 110 L 170 165" class="diagram-line" marker-end="url(#arrow-fig1)" />
                    <path d="M 180 110 L 260 165" class="diagram-line" marker-end="url(#arrow-fig1)" />
                    <path d="M 180 110 L 350 165" class="diagram-line" marker-end="url(#arrow-fig1)" />
                    <path d="M 580 110 L 490 165" class="diagram-line" marker-end="url(#arrow-fig1)" />
                    <path d="M 580 110 L 670 165" class="diagram-line" marker-end="url(#arrow-fig1)" />

                    <!-- Nodes -->
                    <!-- Level 1 -->
                    <rect x="290" y="10" width="180" height="30" class="diagram-node node-main" />
                    <text x="380" y="29" class="diagram-text diagram-text-title" style="fill: var(--primary);">BUSINESS ASSOCIATIONS</text>

                    <!-- Level 2 -->
                    <rect x="100" y="75" width="160" height="35" class="diagram-node node-branch" />
                    <text x="180" y="90" class="diagram-text">UNINCORPORATED</text>
                    <text x="180" y="102" class="diagram-text diagram-text-muted">(No Separate Legal Identity)</text>

                    <rect x="500" y="75" width="160" height="35" class="diagram-node node-branch" />
                    <text x="580" y="90" class="diagram-text">INCORPORATED</text>
                    <text x="580" y="102" class="diagram-text diagram-text-muted">(Separate Legal Entity)</text>

                    <!-- Level 3: Unincorporated -->
                    <rect x="40" y="165" width="80" height="30" class="diagram-node node-leaf" />
                    <text x="80" y="184" class="diagram-text">Sole Trader</text>

                    <rect x="130" y="165" width="80" height="30" class="diagram-node node-leaf" />
                    <text x="170" y="184" class="diagram-text">Partnership</text>

                    <rect x="220" y="165" width="80" height="30" class="diagram-node node-leaf" />
                    <text x="260" y="184" class="diagram-text">Trade Union</text>

                    <rect x="310" y="165" width="80" height="30" class="diagram-node node-leaf" />
                    <text x="350" y="184" class="diagram-text">Society</text>

                    <!-- Level 3: Incorporated -->
                    <rect x="440" y="165" width="100" height="30" class="diagram-node node-accent-sub" />
                    <text x="490" y="184" class="diagram-text">Corporation Sole</text>

                    <rect x="610" y="165" width="120" height="30" class="diagram-node node-accent-sub" />
                    <text x="670" y="184" class="diagram-text">Corporation Aggregate</text>
                </svg>
            </div>

            <div class="simple-english-box">
                <h4>Plain English Explanation</h4>
                <p>To sign a business contract, you must have the legal capacity to do so. Only 'persons' recognized by law can sue, be sued, or sign contracts. Natural persons are human beings. Artificial persons are companies created under the law.</p>
            </div>
            
            <p><strong>B. Nationality & Citizenship under the Kenyan Constitution (2010)</strong></p>
            <p>A natural person's rights and capacities depend on their nationality, domicile, and residence. <strong>Nationality</strong> (or citizenship) represents a person's legal allegiance to a state in exchange for protection.</p>
            <p>Under <span class="law-citation" onclick="jumpToRef('Constitution Article 12')">Article 12</span> of the Kenyan Constitution, citizens are entitled to all privileges of citizenship, a Kenyan passport, and identity documents. Citizenship can be acquired or lost. Under <span class="law-citation" onclick="jumpToRef('Constitution Article 13')">Article 13(2)</span>, it is acquired by birth or registration.</p>

            <!-- DIAGRAM 2: Citizenship Acquisition Paths -->
            <div class="diagram-container">
                <h4 style="margin-bottom: 12px; color: var(--primary);">Figure 2: Paths to Kenyan Citizenship</h4>
                <svg class="diagram-svg" viewBox="0 0 760 200">
                    <defs>
                        <marker id="arrow-fig2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-muted)" />
                        </marker>
                    </defs>
                    <!-- Lines -->
                    <path d="M 380 40 L 200 75" class="diagram-line" marker-end="url(#arrow-fig2)" />
                    <path d="M 380 40 L 560 75" class="diagram-line" marker-end="url(#arrow-fig2)" />
                    <path d="M 200 110 L 100 145" class="diagram-line" marker-end="url(#arrow-fig2)" />
                    <path d="M 200 110 L 300 145" class="diagram-line" marker-end="url(#arrow-fig2)" />
                    <path d="M 560 110 L 450 145" class="diagram-line" marker-end="url(#arrow-fig2)" />
                    <path d="M 560 110 L 560 145" class="diagram-line" marker-end="url(#arrow-fig2)" />
                    <path d="M 560 110 L 670 145" class="diagram-line" marker-end="url(#arrow-fig2)" />

                    <!-- Nodes -->
                    <rect x="280" y="10" width="200" height="30" class="diagram-node node-main" />
                    <text x="380" y="29" class="diagram-text diagram-text-title" style="fill: var(--primary);">CITIZENSHIP (Article 13)</text>

                    <rect x="130" y="75" width="140" height="35" class="diagram-node node-branch" />
                    <text x="200" y="96" class="diagram-text">By Birth (Article 14)</text>

                    <rect x="490" y="75" width="140" height="35" class="diagram-node node-branch" />
                    <text x="560" y="96" class="diagram-text">By Registration (Art 15)</text>

                    <!-- Leaf Birth -->
                    <rect x="45" y="145" width="110" height="30" class="diagram-node node-leaf" />
                    <text x="100" y="164" class="diagram-text">Parentage Rule</text>

                    <rect x="250" y="145" width="100" height="30" class="diagram-node node-leaf" />
                    <text x="300" y="164" class="diagram-text">Foundling Presumed</text>

                    <!-- Leaf Registration -->
                    <rect x="400" y="145" width="100" height="30" class="diagram-node node-success-sub" />
                    <text x="450" y="164" class="diagram-text">Marriage (7+ yrs)</text>

                    <rect x="510" y="145" width="100" height="30" class="diagram-node node-success-sub" />
                    <text x="560" y="164" class="diagram-text">Residence (7+ yrs)</text>

                    <rect x="620" y="145" width="100" height="30" class="diagram-node node-success-sub" />
                    <text x="670" y="164" class="diagram-text">Child Adopted</text>
                </svg>
            </div>
            
            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">1. Citizenship by Birth (Article 14)</h3>
            <ul class="custom-list">
                <li><strong>Parentage:</strong> Born in or outside Kenya, provided at least one parent (mother or father) is a Kenyan citizen at the time of birth.</li>
                <li><strong>Foundling Presumption:</strong> A child found in Kenya who appears to be less than 8 years old, and whose parents and nationality are unknown, is presumed to be a Kenyan citizen by birth.</li>
                <li><strong>Regaining Citizenship:</strong> A citizen by birth who lost their citizenship by acquiring another country's nationality can regain it upon application (recognizing dual citizenship under <span class="law-citation" onclick="jumpToRef('Constitution Article 16')">Article 16</span>).</li>
            </ul>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">2. Citizenship by Registration (Article 15)</h3>
            <ul class="custom-list">
                <li><strong>Marriage:</strong> Married to a Kenyan citizen for at least 7 years (entitled to registration upon application).</li>
                <li><strong>Residence:</strong> Lawfully resident in Kenya for a continuous period of at least 7 years and satisfying conditions in an Act of Parliament.</li>
                <li><strong>Adoption:</strong> A non-citizen child adopted by a Kenyan citizen is registered upon application.</li>
            </ul>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">3. Revocation of Citizenship (Article 17(1))</h3>
            <p>Kenyan citizenship acquired by registration can be revoked (cancelled) if the person:
                <ol class="sub-list" style="margin-left: 20px;">
                    <li>Acquired it through <strong class="highlight-gold">fraud, false representation, or hiding material facts</strong>.</li>
                    <li>Is convicted of an offence and sentenced to <strong class="highlight-gold">3+ years in prison within 5 years</strong> of registration.</li>
                    <li><strong class="highlight-gold">Collaborates with an enemy country</strong> during a war to assist them.</li>
                    <li>Is convicted of treason carrying a penalty of at least <strong class="highlight-gold">7 years' imprisonment</strong>.</li>
                </ol>
            </p>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Citizenship & Revocation</div>
                <ul>
                    <li><strong>Most examined question:</strong> Distinguish citizenship by <em>birth</em> vs by <em>registration</em>. Know <span class="highlight-blue">Article 14 = Birth, Article 15 = Registration</span>.</li>
                    <li>Revocation only applies to citizenship by <strong>registration</strong> — citizenship by birth <strong class="highlight-gold">CANNOT be revoked</strong>.</li>
                    <li>Know the <strong>four grounds for revocation</strong> under Article 17(1) — the examiner may present a scenario and ask you to identify which ground applies.</li>
                    <li>Dual citizenship is allowed under <span class="law-citation" onclick="jumpToRef('Constitution Article 16')">Article 16</span> — a common trick question.</li>
                    <li>A <strong>foundling</strong> found in Kenya and appearing under 8 years old is <span class="highlight-green">presumed Kenyan by birth</span>.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-2",
        badge: "Topic II: Part B",
        title: "Domicile & Residence Rules (Cap 37)",
        content: `
            <p><strong>A. Domicile (Law of Domicile Act, Cap 37)</strong></p>
            <p>A person's <strong>domicile</strong> is the country in which they intend to make their permanent home. It connects a person with a specific legal system that governs their family relationships, status, and inheritance.</p>
            <p>Every person must have a domicile, can only have one domicile at any time, and can never lack a domicile.</p>
            <p>Domicile is established in three ways under the <span class="law-citation" onclick="jumpToRef('Law of Domicile Act (Cap 37)')">Law of Domicile Act (Cap 37)</span>:</p>

            <!-- DIAGRAM 3: Domicile Decision Tree -->
            <div class="diagram-container">
                <h4 style="margin-bottom: 12px; color: var(--primary);">Figure 3: Rules of Domicile (Cap 37)</h4>
                <svg class="diagram-svg" viewBox="0 0 760 200">
                    <defs>
                        <marker id="arrow-fig3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-muted)" />
                        </marker>
                    </defs>
                    <!-- Lines -->
                    <path d="M 380 40 L 180 75" class="diagram-line" marker-end="url(#arrow-fig3)" />
                    <path d="M 380 40 L 500 75" class="diagram-line" marker-end="url(#arrow-fig3)" />
                    <path d="M 380 40 L 670 75" class="diagram-line" marker-end="url(#arrow-fig3)" />
                    <path d="M 180 110 L 60 145" class="diagram-line" marker-end="url(#arrow-fig3)" />
                    <path d="M 180 110 L 180 145" class="diagram-line" marker-end="url(#arrow-fig3)" />
                    <path d="M 180 110 L 300 145" class="diagram-line" marker-end="url(#arrow-fig3)" />
                    <path d="M 500 110 L 450 145" class="diagram-line" marker-end="url(#arrow-fig3)" />
                    <path d="M 500 110 L 560 145" class="diagram-line" marker-end="url(#arrow-fig3)" />

                    <!-- Nodes -->
                    <rect x="290" y="10" width="180" height="30" class="diagram-node node-main" />
                    <text x="380" y="29" class="diagram-text diagram-text-title" style="fill: var(--primary);">DOMICILE (Cap 37)</text>

                    <rect x="110" y="75" width="140" height="35" class="diagram-node node-branch" />
                    <text x="180" y="96" class="diagram-text">Domicile of Origin</text>

                    <rect x="430" y="75" width="140" height="35" class="diagram-node node-branch" />
                    <text x="500" y="96" class="diagram-text">Domicile of Dependence</text>

                    <rect x="610" y="75" width="120" height="35" class="diagram-node node-accent-sub" />
                    <text x="670" y="96" class="diagram-text">Domicile of Choice</text>

                    <!-- Origin Leafs -->
                    <rect x="15" y="145" width="90" height="30" class="diagram-node node-leaf" />
                    <text x="60" y="164" class="diagram-text">Legitimate (Father)</text>

                    <rect x="135" y="145" width="90" height="30" class="diagram-node node-leaf" />
                    <text x="180" y="164" class="diagram-text">Illegitimate (Mother)</text>

                    <rect x="255" y="145" width="90" height="30" class="diagram-node node-leaf" />
                    <text x="300" y="164" class="diagram-text">Foundling (Found)</text>

                    <!-- Dependence Leafs -->
                    <rect x="405" y="145" width="90" height="30" class="diagram-node node-success-sub" />
                    <text x="450" y="164" class="diagram-text">Minor / Adopted</text>

                    <rect x="510" y="145" width="100" height="30" class="diagram-node node-success-sub" />
                    <text x="560" y="164" class="diagram-text">Married Woman</text>
                </svg>
            </div>
            
            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">1. Domicile of Origin</h3>
            <p>Acquired automatically at birth.
                <ul class="custom-list">
                    <li>A legitimate child (or a child born posthumously after the father's death) takes the father's domicile.</li>
                    <li>An illegitimate child takes the mother's domicile <span class="law-citation" onclick="jumpToRef('Cap 37 Section 3')">(Section 3 of Cap 37)</span>.</li>
                    <li>A foundling (abandoned child) takes the domicile of the place where they are found <span class="law-citation" onclick="jumpToRef('Cap 37 Section 4')">(Section 4 of Cap 37)</span>.</li>
                </ul>
            </p>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">2. Domicile of Dependence</h3>
            <p>Applies to individuals whose domicile changes automatically when the domicile of their legal guardian changes.
                <ul class="custom-list">
                    <li>A minor child's domicile depends on the father's. It changes when the father changes his domicile.</li>
                    <li>An illegitimate child's or posthumous child's domicile changes with their mother's domicile.</li>
                    <li>An adopted child takes the adopter's domicile. If adopted by a married couple, they take the husband's domicile <span class="law-citation" onclick="jumpToRef('Cap 37 Section 6')">(Section 6 of Cap 37)</span>.</li>
                    <li>A married woman takes her husband's domicile immediately upon marriage and retains it while the marriage lasts <span class="law-citation" onclick="jumpToRef('Cap 37 Section 7')">(Section 7 of Cap 37)</span>.</li>
                </ul>
            </p>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">3. Domicile of Choice</h3>
            <p>Acquired when a person of full age changes their domicile of origin by establishing a home in another country with the <strong class="highlight-gold">clear, permanent intention of remaining there indefinitely</strong>.</p>

            <div class="critical-rule-box">
                <div class="critical-rule-box-title">⚠️ Critical Rule: Domicile vs Residence</div>
                <p>These are <strong>NOT the same</strong>. <span class="highlight-gold">Domicile = permanent home intention</span>. <span class="highlight-blue">Residence = where you physically are right now</span>. You can only have <strong>ONE domicile</strong> at a time but <strong>multiple residences</strong>. The examiner tests this distinction directly — never confuse them.</p>
            </div>

            <div class="simple-english-box">
                <h4>Plain English Explanation</h4>
                <p>Your <strong>domicile</strong> is the country you consider your permanent home. Your <strong>residence</strong> is just where you are actually living right now. You can have only one domicile, but you can have many residences. For tax and court summons, the court uses factual evidence to find your main residence. For corporations, residence is where they are registered to conduct business.</p>
            </div>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Domicile (Cap 37)</div>
                <ul>
                    <li><strong>Domicile of Origin:</strong> Legitimate child → Father's domicile. Illegitimate child → Mother's domicile. Foundling → Domicile of place found.</li>
                    <li><strong>Domicile of Choice:</strong> Requires TWO elements: (1) <span class="highlight-green">Physical presence</span> + (2) <span class="highlight-gold">Intention to remain permanently</span>. Both must coexist.</li>
                    <li>A <strong>married woman's</strong> domicile changes automatically to her husband's upon marriage <span class="law-citation" onclick="jumpToRef('Cap 37 Section 7')">Section 7</span> — examiner tests this often.</li>
                    <li>Domicile governs <strong>family law, status, and succession</strong> — important in cross-border construction contract disputes.</li>
                    <li>Watch out: A person visiting Kenya for 5 years is a <em>resident</em> but may NOT have Kenyan <em>domicile</em> if they intend to return home.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-3",
        badge: "Unincorporated",
        title: "Sole Proprietorship",
        content: `
            <p>A <strong>sole proprietorship</strong> is a business owned and operated by one person (a sole trader). The business has no separate legal personality from its owner.</p>
            
            <div class="comparison-grid">
                <div class="comp-card pro">
                    <div class="comp-card-title pro-title">Benefits (7 Key Advantages)</div>
                    <ul>
                        <li>Few legal requirements needed to start the business.</li>
                        <li>The business is less regulated.</li>
                        <li>A sole trader enjoys <strong>all the profits alone</strong>.</li>
                        <li>Does not have to share business secrets with anyone.</li>
                        <li>Easy to make and implement decisions quickly without consultation.</li>
                        <li>The sole trader is their own boss.</li>
                        <li>Not limited on the nature of business they can engage in.</li>
                    </ul>
                </div>
                <div class="comp-card con">
                    <div class="comp-card-title con-title">Disadvantages (7 Key Drawbacks)</div>
                    <ul>
                        <li>Lacks separate legal personality (it is not an artificial person).</li>
                        <li>The sole trader suffers all losses alone.</li>
                        <li>Works long hours without resting.</li>
                        <li>May not have enough capital for expansion (no economies of scale).</li>
                        <li><strong class="highlight-gold">Unlimited Liability:</strong> Personal assets can be seized to pay business debts.</li>
                        <li>May make wrong decisions due to lack of consultation.</li>
                        <li><strong class="highlight-gold">Lacks perpetual succession</strong> (business may stop when the sole trader dies).</li>
                    </ul>
                </div>
            </div>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Sole Proprietorship</div>
                <ul>
                    <li>The most critical distinguishing feature of a sole trader vs a company: <span class="highlight-gold">Unlimited personal liability</span> — creditors can seize personal home, car, savings.</li>
                    <li><strong>No perpetual succession</strong> — the business ends with the owner unless transferred. Compare this to a company (perpetual succession = company continues even if founder dies).</li>
                    <li>Examiner may ask you to advise a client whether to register as sole trader or company — always mention liability and succession as key considerations.</li>
                    <li>A sole trader does NOT need to file annual returns or hold board meetings — less administrative burden.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-4",
        badge: "Cap 29",
        title: "Partnerships",
        content: `
            <p>A <strong>partnership</strong> is an association of 2 to 50 persons carrying on a business in common with the intention of making and sharing profits. It is governed by the <span class="law-citation" onclick="jumpToRef('Partnerships Act (Cap 29)')">Partnerships Act (Cap 29)</span>.</p>
            
            <p><strong>The Five Essential Components of a Partnership:</strong>
                <ol class="sub-list" style="margin-left: 20px;">
                    <li>A legal relationship (contract) must bring the partners together.</li>
                    <li>The contract must be between 2 or more people (maximum of 50).</li>
                    <li>The intention must be to carry out business.</li>
                    <li>The business must be carried out in common.</li>
                    <li>The parties must intend to make and share profits.</li>
                </ol>
            </p>
            <p>Partners are individually called 'partners' and collectively 'a firm' under 'the firm name' <span class="law-citation" onclick="jumpToRef('Partnerships Act Section 6')">(Section 6)</span>. A partnership is NOT a legal person, and partners have unlimited liability.</p>
            
            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">Partnership Deed/Agreement</h3>
            <p>Formed orally or in writing. Ordinarily, the agreement details:
                <ol class="sub-list" style="column-count: 2; margin-left: 20px;">
                    <li>Name of partnership</li>
                    <li>Place of business</li>
                    <li>Nature of business</li>
                    <li>Commencement date & duration</li>
                    <li>Capital contributions</li>
                    <li>Accounts of the firm</li>
                    <li>Division of profits</li>
                    <li>Effect of death/bankruptcy</li>
                    <li>Management structure</li>
                    <li>Settlement of disputes</li>
                    <li>Rights of partners</li>
                </ol>
            </p>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">Legal Obligations of Partners</h3>
            <ul class="custom-list">
                <li>Work with utmost good faith for the benefit of the firm.</li>
                <li>Disclose all information affecting the firm <span class="law-citation" onclick="jumpToRef('Partnerships Act Section 32')">(Section 32)</span>.</li>
                <li>Do not make secret profits; disclose and surrender them <span class="law-citation" onclick="jumpToRef('Partnerships Act Section 33')">(Section 33)</span>.</li>
                <li>Do not compete with the firm. Competing profits must be surrendered.</li>
                <li>Dismissal of a partner must be in good faith, and only if explicitly recognized in the agreement <span class="law-citation" onclick="jumpToRef('Partnerships Act Section 29')">(Section 29)</span>.</li>
            </ul>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">Rights of Partners (Section 28 Default Rules)</h3>
            <p>Unless agreed otherwise, <span class="law-citation" onclick="jumpToRef('Partnerships Act Section 28')">Section 28</span> confers:
                <ul class="custom-list">
                    <li>Equal share in capital and profits.</li>
                    <li>Right to be indemnified (reimbursed) for business payments/liabilities.</li>
                    <li>Interest at **6% per annum** on advances beyond agreed capital.</li>
                    <li>Right to take part in management.</li>
                    <li>No new partner introduced without unanimous consent of all.</li>
                    <li>Ordinary matters decided by majority, but changing the business nature needs unanimous consent.</li>
                    <li>Access to inspect and copy partnership books.</li>
                </ul>
            </p>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">Dissolution Grounds</h3>
            <ul class="custom-list">
                <li><strong>By Expiration or Notice (Section 36):</strong> Expiration of fixed term, completion of adventure, or at-will notice.</li>
                <li><strong>By Bankruptcy, Death or Charge (Section 37):</strong> Dissolves on death/bankruptcy of any partner, or if a partner's share is charged for separate debt.</li>
                <li><strong>By Illegality (Section 38):</strong> Mandatory dissolution if the business becomes illegal.</li>
                <li><strong>By Court Order (Section 39):</strong> Partner insane, permanently incapable, guilty of prejudicial conduct, persistent breach of agreement, business carried on at a loss, or just and equitable.</li>
            </ul>

            <div class="critical-rule-box">
                <div class="critical-rule-box-title">⚠️ Critical Distinction: Partnership vs Company</div>
                <p>This comparison is <strong class="highlight-gold">almost guaranteed in the exam</strong>. Partnership = <span class="highlight-blue">no separate legal personality, max 50 persons, unlimited liability, no perpetual succession</span>. Company = <span class="highlight-green">separate legal person, perpetual succession, limited liability, can own property</span>.</p>
            </div>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Partnerships (Cap 29)</div>
                <ul>
                    <li><strong>Partnership limit:</strong> Minimum 2, maximum <span class="highlight-gold">50 persons</span> (cap 29). A banking partnership has a lower limit of 10. Exceeding limits = illegal association.</li>
                    <li>Partners have <strong>unlimited joint and several liability</strong> — creditors can sue any one partner for the full debt even if they had no knowledge of it.</li>
                    <li>The <strong>"holding out" rule</strong> (Section 14): If someone presents themselves as a partner (even falsely), they are liable to third parties who relied on that representation.</li>
                    <li><span class="highlight-blue">Section 28</span> default rules only apply if the partnership deed is SILENT on the issue — always check the deed first.</li>
                    <li>Know the <strong>interest rate on partner advances: 6% per annum</strong> — the examiner has tested this numerical fact.</li>
                    <li>A partner who competes with the firm must <strong>surrender ALL profits</strong> from the competing business <span class="law-citation" onclick="jumpToRef('Partnerships Act Section 33')">Section 33</span>.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-5",
        badge: "Cap 233 & Cap 108",
        title: "Trade Unions & Societies",
        content: `
            <p><strong>A. Trade Unions (Trade Unions Act, Cap 233)</strong></p>
            <p>Registered under <span class="law-citation" onclick="jumpToRef('Trade Unions Act (Cap 233) Section 11')">Section 11</span> to regulate relations between employees and employers. A registered trade union can sue or be sued in its registered name <span class="law-citation" onclick="jumpToRef('Trade Unions Act Section 27(1)')">(Section 27(1))</span>, making it a <strong>quasi-corporation</strong>. It is liable on its contracts <span class="law-citation" onclick="jumpToRef('Trade Unions Act Section 25')">(Section 25)</span>.</p>
            <p><strong>Trade Union Immunities:</strong>
                <ul class="custom-list">
                    <li><strong>Civil Immunity (Section 23):</strong> Cannot be sued in civil court for acts done in contemplation or furtherance of a trade dispute.</li>
                    <li><strong>Tort Immunity (Section 24):</strong> Cannot be sued for tortious acts (like negligence) alleged to be committed by it or on its behalf.</li>
                    <li><strong>Property rules:</strong> All property must be vested in <strong>trustees</strong> for the benefit of the union <span class="law-citation" onclick="jumpToRef('Trade Unions Act Section 41b')">(Section 41b)</span> because the union itself cannot legally own property directly.</li>
                </ul>
            </p>

            <p><strong>B. Societies (Societies Act, Cap 108)</strong></p>
            <p>Under <span class="law-citation" onclick="jumpToRef('Societies Act Section 2(1)')">Section 2(1)</span>, a society includes any club or association of **10 or more persons**, excluding registered companies, corporations, trade unions, co-ops, registered schools, banks, or partnerships of more than 20 persons (e.g. political parties, football clubs).</p>
            <div class="simple-english-box">
                <h4>Society Legal Status & Liability</h4>
                <p>Registration under the Societies Act **does not confer corporate personality**. It merely provides a management and winding-up framework. Because the society is not a separate legal person, its members are held **jointly and severally liable** for all debts and obligations of the society.</p>
            </div>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Trade Unions & Societies</div>
                <ul>
                    <li><strong>Trade Union ≠ Company.</strong> A union is a <span class="highlight-blue">quasi-corporation</span> — it can sue and be sued but does <strong>NOT</strong> have full separate legal personality like a registered company.</li>
                    <li>Trade unions <strong>cannot own property directly</strong> — all property must be held by <span class="highlight-gold">trustees</span> on behalf of the union <span class="law-citation" onclick="jumpToRef('Trade Unions Act Section 41b')">Section 41b</span>.</li>
                    <li>A registered society has <strong>no separate legal personality</strong> — members are <span class="highlight-gold">jointly and severally liable</span> for all debts.</li>
                    <li>The key difference the examiner tests: <span class="highlight-green">Trade Union = quasi-corporate (can sue in its name)</span> vs <span class="highlight-blue">Society = not corporate at all (members liable)</span>.</li>
                    <li>An unregistered society of 10+ people operating commercially may be treated as an <strong>illegal association</strong> under Section 389 of the Companies Act.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-6",
        badge: "Topic III & V",
        title: "Company Law Foundations & Salomon Rule",
        content: `
            <p><strong>A. What is Company Law?</strong></p>
            <p>Company Law is the study of the principles governing the affairs and conduct of a company. Under <span class="law-citation" onclick="jumpToRef('Companies Act Section 2')">Section 2(1)</span> of the Companies Act (Cap 486), a company is defined as 'a company formed and registered under this Act or an existing company'.</p>
            <p>The sources of Kenyan Company Law include:
                <ol class="sub-list" style="margin-left:20px;">
                    <li>The Kenyan Companies Act (Cap 486), which was borrowed from the English Companies Act of 1948 (a consolidating Act, rather than a codified code).</li>
                    <li>The substance of Common Law and Equity, as formulated in judicial decisions over time.</li>
                </ol>
            </p>
            <p>The foundation of Company Law is built on two core legal pillars:
                <ul class="custom-list">
                    <li><strong>The Concept of Legal Personality:</strong> The company is treated in law as a separate legal entity distinct from its members.</li>
                    <li><strong>The Theory of Limited Liability:</strong> Members are only liable for the debts of the company up to a certain limit.</li>
                </ul>
            </p>

            <p><strong>B. The Salomon Principle</strong></p>
            <p>The doctrine of corporate personality was firmly established in the landmark case of <span class="law-citation" onclick="jumpToCase('Salomon v. Salomon & Co. Ltd')">Salomon v. Salomon & Co. Ltd (1897)</span>. Lord MacNaghten stated: <em>'The company is at Law a different person altogether from the subscribers to the memorandum.'</em></p>
            
            <!-- IMAGE 1: Salomon separate legal personality illustration -->
            <div style="text-align: center; margin: 20px 0; background-color: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow);">
                <img src="salomon_personality.png" alt="Salomon v. Salomon separate personality concept" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid var(--card-border); max-height: 320px; object-fit: contain;">
                <p style="margin-top: 8px; font-size: 0.9rem; color: var(--text-muted); font-weight: 500; margin-bottom: 12px;">Illustration: Aron Salomon vs. Salomon & Co. Ltd (The Corporate Shield)</p>
                <a href="salomon_personality.png" download="salomon_personality.png" class="btn" style="text-decoration: none; font-size: 0.82rem; padding: 6px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px;">
                    <svg class="svg-icon" viewBox="0 0 24 24" style="width: 14px; height: 14px; stroke-width: 2.5;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Illustration
                </a>
            </div>

            <div class="simple-english-box">
                <h4>Significance of the Salomon Decision</h4>
                <p>The House of Lords established three critical rules:
                    <ol class="sub-list" style="margin-left: 20px;">
                        <li><strong>Legality of One-Man Companies:</strong> A single person can own virtually the entire share capital and run the business, and it remains a valid company.</li>
                        <li><strong>Availability to Small Businesses:</strong> Incorporation is not just for huge public companies; sole proprietors and partnerships can incorporate to protect themselves.</li>
                        <li><strong>Debenture Security:</strong> A member can be both a shareholder and a secured creditor (by holding debentures secured by a charge over company assets), ranking ahead of unsecured creditors on winding up.</li>
                    </ol>
                </p>
            </div>
            
            <p>This principle is reinforced in the case of <span class="law-citation" onclick="jumpToCase('Lee v. Lee’s Air Farming Ltd.')">Lee v. Lee’s Air Farming Ltd. (1961)</span>, which proved that a majority shareholder can also be an employee of the company under a contract of service, meaning the company can contract with its own directors.</p>

            <div class="critical-rule-box">
                <div class="critical-rule-box-title">⚠️ The Golden Rule: Separate Legal Personality</div>
                <p>The Salomon principle means: <span class="highlight-gold">once incorporated, a company is a COMPLETELY separate legal person from its founders</span>. The company owns its own property, can sue and be sued, and its debts are NOT the owner's debts. This is the <strong>single most tested concept</strong> in this entire course.</p>
            </div>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Salomon Rule & Corporate Personality</div>
                <ul>
                    <li><strong>Salomon (1897)</strong> = The foundation. Know Lord MacNaghten's quote: <em class="highlight-blue">"The company is at Law a different person altogether from the subscribers."</em></li>
                    <li>The company's <strong>debts are NOT the shareholder's debts</strong> even if one person owns 99.9% of shares. This is the essence of limited liability.</li>
                    <li>A shareholder/director <strong>CAN be an employee</strong> of their own company — Lee v Lee's Air Farming. This has been tested via scenario questions.</li>
                    <li><span class="highlight-gold">Macaura (1925)</span>: A shareholder has <strong>no insurable interest</strong> in company property. You cannot insure what doesn't legally belong to you.</li>
                    <li>The examiner may give you a scenario where someone blends personal and company finances — advise them on the Salomon rule and the risks of veil lifting.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-7",
        badge: "Topic III: Classification",
        title: "Classification of Companies & Privileges",
        content: `
            <p><strong>A. Statutory Limit on Unregistered Businesses</strong></p>
            <p>Under <span class="law-citation" onclick="jumpToRef('Companies Act Section 389')">Section 389</span> of the Companies Act, no company, association, or partnership consisting of <strong>more than 20 persons</strong> can be formed for business unless it is registered as a company under the Act.</p>
            
            <p><strong>B. The Three Types of Companies (S389 classification)</strong></p>
            <ol class="sub-list" style="margin-left: 20px; margin-bottom:15px;">
                <li><strong>Chartered Companies:</strong> Created by the Crown or the President. In Kenya, chartered corporations mostly fall under the Universities Act. No new trading companies are chartered in Kenya post-independence.</li>
                <li><strong>Statutory Companies:</strong> Created directly by an Act of Parliament. They have no shareholders; their initial capital is provided by the National Treasury. They operate on commercial principles but cannot be wound up by creditors (e.g., KenGen, KP&L, Kenya Railways, KTDA).</li>
                <li><strong>Registered Companies:</strong> Formed by registering under the Companies Act. They are classified into Public and Private companies.</li>
            </ol>

            <p><strong>C. Types of Liability (Section 4(2))</strong></p>
            <ul class="custom-list">
                <li><strong>Limited by Shares (Section 4(2)(a)):</strong> Members' liability is limited to any amount unpaid on the shares they hold.</li>
                <li><strong>Limited by Guarantee (Section 4(2)(b)):</strong> Members guarantee to pay a specific amount if the company goes into liquidation. The guarantee takes effect 1 year into winding up. Used for non-profits.</li>
                <li><strong>Unlimited Companies (Section 4(2)(c)):</strong> No limit on members' liability; they are personally liable for all debts, resembling partners. There are no active unlimited trading companies in Kenya.</li>
            </ul>

            <div class="simple-english-box">
                <h4>Private Company Privileges (S30 & S31)</h4>
                <p>A private company has several advantages/privileges over a public company:
                    <ol class="sub-list" style="margin-left: 20px; margin-top: 6px;">
                        <li>Need only <strong class="highlight-gold">1 member</strong> (2015 Amendments changed it from 2).</li>
                        <li>Can <strong>commence business immediately</strong> on the day of incorporation.</li>
                        <li>Can allocate shares without issuing a prospectus or filing a statement in lieu of prospectus.</li>
                        <li>Not required to hold a statutory meeting or file a statutory report.</li>
                        <li>Need only <strong class="highlight-gold">one director</strong> (public needs at least three).</li>
                        <li>Accounts filed with the registrar are <strong>protected from public inspection</strong>.</li>
                        <li>Directors are not required to hold share qualifications or be subject to remuneration limits.</li>
                    </ol>
                </p>
            </div>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Company Classification</div>
                <ul>
                    <li><strong>Private vs Public company</strong> is a classic exam comparison. Key differences: Private = max <span class="highlight-gold">50 members</span>, cannot invite public to buy shares, 1 director min. Public = unlimited members, can issue prospectus, <span class="highlight-gold">3 directors min</span>.</li>
                    <li>A company <strong>limited by guarantee</strong> is used for non-profits (charities, professional bodies) — the examiner may ask what type of company a bar association or law society is.</li>
                    <li>Section 389 rule: <span class="highlight-blue">more than 20 persons</span> in an unregistered business = illegal. The Fort Hall Bakery case directly illustrates the consequence.</li>
                    <li>Statutory companies (KenGen, KTDA) <strong>cannot be wound up</strong> by creditors — know this exception.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-8",
        badge: "Topic IV",
        title: "Formation, Registration & Significance",
        content: `
            <p><strong>A. Company Promoters</strong></p>
            <p>A company comes into existence when individuals, called <strong>promoters</strong>, come together to exploit a business opportunity. Promoters prepare the company's constitution documents.</p>
            
            <p><strong>B. The Core Constitution Documents</strong></p>
            <ul class="custom-list">
                <li><strong>Memorandum of Association:</strong> Sets up the external constitution and objects of the company. It regulates the company's dealings with third parties. It must be signed by at least 7 persons (public) or 2 persons (private, S4), witnessed by a lawyer.</li>
                <li><strong>Articles of Association:</strong> Contains the internal regulations for company management (dealing with shares, meetings, and directors). S11 allows adopting Table A in the 8th Schedule.</li>
            </ul>

            <p><strong>C. The 5 Accompanying Documents for Registration</strong></p>
            <ol class="sub-list" style="margin-left: 20px; margin-bottom: 20px;">
                <li><strong>Articles of Association:</strong> Regulates internal affairs.</li>
                <li><strong>Consent to Act as Director (Form No. 209):</strong> Signed by the directors.</li>
                <li><strong>List of Consenting Directors (Form No. 210):</strong> Details their names, descriptions, and dates of birth.</li>
                <li><strong>Statement of Nominal Share Capital:</strong> Filed for tax purposes pursuant to Section 39 of the Stamp Duty Act. Paid at a National Bank Branch.</li>
                <li><strong>Declaration of Compliance (Form No. 208):</strong> A statutory declaration by an advocate that all legal requirements have been met.</li>
            </ol>

            <div class="simple-english-box">
                <h4>Significance of Registration: Fort Hall Bakery Case</h4>
                <p>Registration is the mandatory legal condition for a company's existence. If you carry on business with <strong>more than 20 people</strong> without registering, the association is illegal. In <span class="law-citation" onclick="jumpToCase('Fort Hall Bakery Supply Co. v. Wangoe')">Fort Hall Bakery Supply Co. v. Wangoe</span>, a group of 45 unregistered persons sued a defendant. The court dismissed the case because a non-existent plaintiff has no legal standing and can neither receive nor pay costs.</p>
            </div>

            <p><strong>D. Refusal to Register & Illegal Objects</strong></p>
            <p>If the registrar wrongfully refuses to register a company, promoters can apply for an **Order of Mandamus** from the High Court to force registration, as seen in <span class="law-citation" onclick="jumpToCase('R v Registrar of Co Ex Parte Bowen')">R v Registrar of Co Ex Parte Bowen</span>.</p>
            <p>However, if the objects of the company are illegal, immoral, or against the Bill of Rights (e.g. against the existence of God), registration will be denied under the case of <span class="law-citation" onclick="jumpToCase('Bowman v. The Secular Society')">Bowman v. The Secular Society</span>.</p>

            <div class="critical-rule-box">
                <div class="critical-rule-box-title">⚠️ Critical: Certificate of Incorporation = Conclusive Proof</div>
                <p>Once the Registrar issues the <strong class="highlight-gold">Certificate of Incorporation</strong>, it is conclusive proof that the company exists. <span class="highlight-blue">Even if there were irregularities in formation</span>, the certificate cannot be challenged after issuance — the company is legally alive from that date.</p>
            </div>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Formation & Registration</div>
                <ul>
                    <li>The <strong>Memorandum</strong> governs the company's relationship with the <span class="highlight-blue">outside world</span> (objects, capacity). The <strong>Articles</strong> govern <span class="highlight-gold">internal management</span> (shares, meetings, directors).</li>
                    <li>Know the <strong>5 documents for registration</strong> — the Declaration of Compliance (Form 208) and Consent to Act as Director (Form 209) are the most frequently tested specifics.</li>
                    <li>Refusal by Registrar = apply for <span class="highlight-gold">Order of Mandamus</span> (R v Registrar of Co Ex Parte Bowen). This is a specific remedy often tested.</li>
                    <li>Objects clause violations render contracts <strong>ultra vires and VOID</strong> (Ashbury Carriage case) — cannot be ratified, not even by all shareholders unanimously.</li>
                    <li>A company cannot have illegal objects — the Registrar must refuse or the court can intervene. <span class="law-citation" onclick="jumpToCase('Bowman v. The Secular Society')">Bowman v Secular Society</span> is the authority.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-9",
        badge: "Topic V",
        title: "Consequences & Disadvantages of Incorporation",
        content: `
            <p><strong>A. Consequences of Incorporation (Section 16(2))</strong></p>
            <p>Once registered, the company becomes a body corporate with rights, obligations, and capacities distinct from its members. This results in the following legal effects:</p>
            <ul class="custom-list">
                <li><strong>Perpetual Succession:</strong> The company exists in perpetuity. The death, bankruptcy, or exit of members does not affect its existence. It only dies via legal liquidation.</li>
                <li><strong>Separate Property Ownership:</strong> The company's assets belong to the company, not its members. A member has no legal or insurable interest in the company's assets. In <span class="law-citation" onclick="jumpToCase('Macaura v. Northern Assurance Co. Ltd')">Macaura v. Northern Assurance Co. Ltd (1925)</span>, the owner of a timber estate sold it to a company he owned, but kept the insurance policy in his own name. When the timber burned, the insurance company refused to pay, and the court held that Macaura had no insurable interest in the company's property.</li>
                <li><strong>No Racial or Nationality Attributes:</strong> A company is an abstract legal creation and cannot possess racial features. In <span class="law-citation" onclick="jumpToCase('Katate v Nyakatukura')">Katate v Nyakatukura (1956)</span>, a court's jurisdiction depended on whether all parties were 'natives'. The court held that a registered company cannot have racial or native attributes, regardless of the nationality of its shareholders.</li>
                <li><strong>Right to Sue & Be Sued (Foss v. Harbottle Proper Plaintiff Rule):</strong> A company must enforce its rights in its own name. In <span class="law-citation" onclick="jumpToCase('Foss v. Harbottle')">Foss v. Harbottle (1843)</span>, minority shareholders sued directors for defrauding the company. The court dismissed the suit, holding that the proper plaintiff for a wrong done to the company is the company itself, acting through its majority.</li>
                <li><strong>Legal Representation Rule:</strong> In <span class="law-citation" onclick="jumpToCase('East Africa Roofing Co. Ltd v. Pandit')">East Africa Roofing Co. Ltd v. Pandit (1954)</span>, the court established that a limited liability company cannot appear in court in person or through its manager; it must always be represented by an advocate/lawyer.</li>
                <li><strong>Common Seal (Section 16(2)):</strong> Acts as the company's signature to authenticate official deeds.</li>
            </ul>

            <div class="simple-english-box">
                <h4>4 Major Disadvantages of Incorporation</h4>
                <ol class="sub-list" style="margin-left: 20px;">
                    <li><strong>The Agency Problem:</strong> Shareholders do not manage the company; it is managed by directors. This separation of ownership and control can lead to conflicts of interest.</li>
                    <li><strong>Expense & Winding Up Formalities:</strong> Companies are expensive to form (search fees, legal fees, stamp duty) and wind up. Liquidator fees and preferential taxes <span class="law-citation" onclick="jumpToRef('Companies Act Section 311')">(Section 311)</span> must be paid.</li>
                    <li><strong>Loss of Privacy (Publicity):</strong> Public companies must file annual returns, balance sheets, and registries, which are open to public inspection <span class="law-citation" onclick="jumpToRef('Companies Act Section 384(1)')">(Section 384(1))</span>.</li>
                    <li><strong>Ultra Vires Inflexibility:</strong> A company can only do things written in its objects clause. Other actions are void, which can restrict the business from adapting to new opportunities.</li>
                </ol>
            </div>

            <div class="exam-tip-box">
                <div class="exam-tip-box-header">🎯 Exam Advisor — Consequences of Incorporation</div>
                <ul>
                    <li><strong>Perpetual Succession</strong> = the company lives on even if ALL founders die. <span class="highlight-gold">Death of a shareholder does NOT dissolve the company</span> — contrast with partnerships.</li>
                    <li><strong>Foss v Harbottle</strong> = the "proper plaintiff" rule. If a wrong is done to the company, <span class="highlight-blue">only the company can sue</span> — not individual shareholders. Know the 4 exceptions!</li>
                    <li>A company must be represented by an advocate in court — <span class="highlight-gold">East Africa Roofing v Pandit</span>. A director or manager cannot appear on behalf of the company.</li>
                    <li>The <strong>Common Seal</strong> authenticates company deeds — not all contracts need the seal (only those required to be under seal, like land transfers).</li>
                    <li>The examiner may give a scenario where a shareholder tries to insure company property or file suit on behalf of the company. Apply <span class="highlight-blue">Macaura</span> and <span class="highlight-blue">Foss v Harbottle</span> respectively.</li>
                </ul>
            </div>
        `
    },
    {
        id: "sec-10",
        badge: "Topic VI: Veil",
        title: "Lifting the Corporate Veil - By Courts",
        content: `
            <p><strong>A. The Concept of Lifting the Veil</strong></p>
            <p>While the Salomon rule states that the company is a separate entity, this 'corporate shell' can sometimes be pierced to look at the individuals behind it. Lord Denning in **Littlewoods Mail Order Stores Ltd** stated: <em>'Courts often draw aside the veil... to see the lies behind the mask.'</em></p>
            <p>Veil lifting is done when the corporate form is used to commit fraud, evade taxes, or cover up crimes. It is divided into lifting by the Courts (Common Law) and lifting by Statutes.</p>

            <!-- DIAGRAM 4: Lifting the Corporate Veil Decision Tree -->
            <div class="diagram-container">
                <h4 style="margin-bottom: 12px; color: var(--primary);">Figure 4: Lifting the Corporate Veil</h4>
                <svg class="diagram-svg" viewBox="0 0 760 230">
                    <defs>
                        <marker id="arrow-fig4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-muted)" />
                        </marker>
                    </defs>
                    <!-- Lines -->
                    <path d="M 380 40 L 220 75" class="diagram-line" marker-end="url(#arrow-fig4)" />
                    <path d="M 380 40 L 590 75" class="diagram-line" marker-end="url(#arrow-fig4)" />
                    <path d="M 220 110 L 60 165" class="diagram-line" marker-end="url(#arrow-fig4)" />
                    <path d="M 220 110 L 165 165" class="diagram-line" marker-end="url(#arrow-fig4)" />
                    <path d="M 220 110 L 270 165" class="diagram-line" marker-end="url(#arrow-fig4)" />
                    <path d="M 220 110 L 375 165" class="diagram-line" marker-end="url(#arrow-fig4)" />
                    <path d="M 590 110 L 490 165" class="diagram-line" marker-end="url(#arrow-fig4)" />
                    <path d="M 590 110 L 590 165" class="diagram-line" marker-end="url(#arrow-fig4)" />
                    <path d="M 590 110 L 700 165" class="diagram-line" marker-end="url(#arrow-fig4)" />

                    <!-- Nodes -->
                    <rect x="250" y="10" width="260" height="30" class="diagram-node node-main" />
                    <text x="380" y="29" class="diagram-text diagram-text-title" style="fill: var(--primary);">LIFTING THE CORPORATE VEIL</text>

                    <rect x="140" y="75" width="160" height="35" class="diagram-node node-branch" />
                    <text x="220" y="96" class="diagram-text">Lifting by Courts (Common Law)</text>

                    <rect x="510" y="75" width="160" height="35" class="diagram-node node-branch" />
                    <text x="590" y="96" class="diagram-text">Lifting by Statutes (Act)</text>

                    <!-- Courts Leafs -->
                    <rect x="15" y="165" width="90" height="30" class="diagram-node node-leaf" />
                    <text x="60" y="184" class="diagram-text">Alien Enemy</text>

                    <rect x="120" y="165" width="90" height="30" class="diagram-node node-leaf" />
                    <text x="165" y="184" class="diagram-text">Sham / Cloak</text>

                    <rect x="225" y="165" width="90" height="30" class="diagram-node node-leaf" />
                    <text x="270" y="184" class="diagram-text">Subsidiary Agent</text>

                    <rect x="330" y="165" width="90" height="30" class="diagram-node node-leaf" />
                    <text x="375" y="184" class="diagram-text">Evade Obligations</text>

                    <!-- Statutes Leafs -->
                    <rect x="445" y="165" width="90" height="30" class="diagram-node node-accent-sub" />
                    <text x="490" y="184" class="diagram-text">Membership Drop</text>

                    <rect x="545" y="165" width="90" height="30" class="diagram-node node-accent-sub" />
                    <text x="590" y="184" class="diagram-text">Name Publication</text>

                    <rect x="655" y="165" width="90" height="30" class="diagram-node node-error-sub" />
                    <text x="700" y="184" class="diagram-text">Fraudulent Trade</text>
                </svg>
            </div>
            
            <!-- IMAGE 2: Lifting the Corporate Veil illustration -->
            <div style="text-align: center; margin: 20px 0; background-color: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow);">
                <img src="lifting_veil.png" alt="Piercing the corporate veil concept" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid var(--card-border); max-height: 320px; object-fit: contain;">
                <p style="margin-top: 8px; font-size: 0.9rem; color: var(--text-muted); font-weight: 500; margin-bottom: 12px;">Illustration: Courts drawing aside the corporate veil to expose fraud</p>
                <a href="lifting_veil.png" download="lifting_veil.png" class="btn" style="text-decoration: none; font-size: 0.82rem; padding: 6px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px;">
                    <svg class="svg-icon" viewBox="0 0 24 24" style="width: 14px; height: 14px; stroke-width: 2.5;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Illustration
                </a>
            </div>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">Common Law Grounds for Lifting the Veil</h3>
            <ul class="custom-list">
                <li><strong>1. Determination of Character (Enemy Alien in War):</strong> If a company is registered in a friendly country but controlled by citizens of an enemy state, the court will lift the veil to determine its enemy status, as in <span class="law-citation" onclick="jumpToCase('Daimler Co. Ltd. v. Continental Tyre & Rubber Co. Ltd.')">Daimler Co. Ltd v. Continental Tyre & Rubber Co. Ltd (1916)</span>.</li>
                <li><strong>2. Where the Company is a Sham or Cloak:</strong> If incorporation is used to escape a personal contract or commit fraud, the court will ignore the company. In <span class="law-citation" onclick="jumpToCase('Jones v. Lipman')">Jones v. Lipman (1962)</span>, Lipman agreed to sell land to Jones. To avoid completing the sale, he transferred the land to a company he created with £100 capital. The court lifted the veil, declared the company a sham, and ordered specific performance against both Lipman and the company.</li>
                <li><strong>3. Company acting as shareholder's Agent:</strong> If a subsidiary company acts solely as an agent of the parent company, the parent is liable. In <span class="law-citation" onclick="jumpToCase('Firestone Tyre & Rubber Co. v. Llewellin')">Firestone Tyre & Rubber Co. v. Llewellin</span>, a US parent was held liable for UK tax because its UK subsidiary acted as its agent.</li>
                <li><strong>4. Ratification of Corporate Acts:</strong> In <span class="law-citation" onclick="jumpToCase('Bamford v. Bamford')">Bamford v. Bamford</span>, directors issued shares improperly, but the general meeting ratified it. Harman LJ stated that full disclosure allows the shareholders to grant 'absolution and forgiveness of sins' for acts that are not ultra vires.</li>
                <li><strong>5. Evading Legal Obligations:</strong> In <span class="law-citation" onclick="jumpToCase('Gilford Motor Co v. Horne')">Gilford Motor Co v. Horne (1933)</span>, a managing director agreed not to solicit his former employer's customers. He set up a company in his wife's name to do so. The court granted an injunction against him and his company to enforce the obligation.</li>
                <li><strong>6. Ascertainment of Residence (Taxation):</strong> Under <span class="law-citation" onclick="jumpToCase('De Beers Consolidated Mines Ltd v. Howe')">De Beers Consolidated Mines Ltd v. Howe</span>, a company's residence is where its central management and control actually abides (where board meetings are held).</li>
            </ul>
        `
    },
    {
        id: "sec-11",
        badge: "Topic VI: Statutes",
        title: "Lifting the Corporate Veil - By Statutes",
        content: `
            <p><strong>A. Statutory Lifting of the Veil</strong></p>
            <p>The legislature can forge a 'sledgehammer' to crack the corporate shell. The Companies Act contains several provisions that impose personal liability on officers or disregard the separate entity:</p>
            
            <ul class="custom-list">
                <li><strong>1. Membership Fallen Below Minimum (Section 33):</strong> If a company carries on business for **more than 6 months** with fewer than the minimum members (below 1 for private, below 7 for public), any member who knows this becomes **personally liable** for all debts contracted after the 6-month period.</li>
                <li><strong>2. Non-Publication of Company Name (Section 109(4)):</strong> Officers must write the company's correct name on all seals, letters, and cheques. If an officer signs a cheque without the correct name (e.g. leaving out 'Limited'), they are liable to a **Sh 1,000 fine** and are **personally liable** to the holder of the cheque unless the company pays it. (The misdescription must be grave, as seen in <span class="law-citation" onclick="jumpToCase('Goldsmith Sicklemere v Baxter')">Goldsmith Sicklemere v Baxter</span> and <span class="law-citation" onclick="jumpToCase('Durham Fancy Goods v Michael Jackson Fancy Goods Ltd')">Durham Fancy Goods v Michael Jackson Fancy Goods Ltd</span>).</li>
                <li><strong>3. Group Accounts (Section 150-153):</strong> A holding company is obliged to incorporate the assets and liabilities of its subsidiaries into its consolidated balance sheets, merging the group entities for financial purposes.</li>
                <li><strong>4. Investigations (Section 167 & 173):</strong> Court-appointed inspectors have the power to investigate the affairs and membership of a company and its subsidiaries as if they were a single entity.</li>
                <li><strong>5. Takeover Bids (Section 210):</strong> Where a company acquires 9/10ths of another company's shares, it can force the acquisition of minority shares, treating the company and its majority as one entity (see <span class="law-citation" onclick="jumpToCase('Re Bugle Press Ltd')">Re Bugle Press Ltd</span>).</li>
                <li><strong>6. Fraudulent Trading (Section 323):</strong> If during winding up, it appears the business was carried on with **intent to defraud creditors**, the court can declare the directors **personally liable** for all debts. Under Section 323(3), directors can also face criminal imprisonment of **3 to 10 years**. Case laws include <span class="law-citation" onclick="jumpToCase('Re William Leitch Brothers Ltd')">Re William Leitch Brothers Ltd</span> and <span class="law-citation" onclick="jumpToCase('Re Maidstone Distributors Co')">Re Maidstone Distributors Co</span> (which requires positive fraudulent action, not mere passivity).</li>
            </ul>

            <div class="simple-english-box">
                <h4>Summary of Subsidiary Rules (Section 154)</h4>
                <p>A company is a **subsidiary** of a holding company if the holding company controls its board composition or holds more than half of its shares. Important rules include:
                    <ol class="sub-list" style="margin-left: 20px;">
                        <li>A subsidiary can never be a member (shareholder) of its holding company <span class="law-citation" onclick="jumpToRef('Companies Act Section 29')">(Section 29)</span>.</li>
                        <li>If a person is disqualified from a position in the holding company, they are also disqualified from the subsidiary <span class="law-citation" onclick="jumpToRef('Companies Act Section 161')">(Section 161)</span>.</li>
                        <li>It is illegal for a company to loan money to its directors, but a subsidiary is allowed to lend money to its holding company <span class="law-citation" onclick="jumpToRef('Companies Act Section 191')">(Section 191)</span>.</li>
                    </ol>
                </p>
            </div>
        `
    },
    {
        id: "sec-12",
        badge: "Topic VII: Articles",
        title: "Constitution: Articles of Association",
        content: `
            <p><strong>A. Nature of the Articles (Section 2(1))</strong></p>
            <p>The Articles of Association are subordinate to and controlled by the Memorandum. Lord Cairns noted: <em>'The memorandum is the area beyond which the company cannot go; inside that area the shareholders may make such regulations as they think fit.'</em></p>
            <p>Under <span class="law-citation" onclick="jumpToRef('Companies Act Section 12')">Section 12</span>, the Articles must be in English, printed, divided into consecutive paragraphs, and signed by each subscriber in the presence of a witness.</p>
            
            <!-- IMAGE 3: MoA vs AoA relationship diagram -->
            <div style="text-align: center; margin: 20px 0; background-color: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow);">
                <img src="memo_vs_articles.png" alt="Memorandum of Association vs Articles of Association" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid var(--card-border); max-height: 320px; object-fit: contain;">
                <p style="margin-top: 8px; font-size: 0.9rem; color: var(--text-muted); font-weight: 500; margin-bottom: 12px;">Illustration: Memorandum (Outer Bounds) vs. Articles (Internal Operations)</p>
                <a href="memo_vs_articles.png" download="memo_vs_articles.png" class="btn" style="text-decoration: none; font-size: 0.82rem; padding: 6px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px;">
                    <svg class="svg-icon" viewBox="0 0 24 24" style="width: 14px; height: 14px; stroke-width: 2.5;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Illustration
                </a>
            </div>

            <p><strong>B. Typical Contents of the Articles (16 Key Subjects)</strong></p>
            <ol class="sub-list" style="column-count: 2; margin-left: 20px; margin-bottom: 20px;">
                <li>Adoption of preliminary contracts</li>
                <li>Number and value of shares</li>
                <li>Allotment of shares</li>
                <li>Calls on shares</li>
                <li>Forfeiture of shares</li>
                <li>Transmission of shares</li>
                <li>Alteration of capital</li>
                <li>Share certificates</li>
                <li>Conversion of shares into stock</li>
                <li>Voting rights and proxies</li>
                <li>Meetings and quorum</li>
                <li>Directors and appointments (S107)</li>
                <li>AGM and Board powers</li>
                <li>Office of the Secretary</li>
                <li>Accounts and Audit</li>
                <li>Winding up procedures</li>
            </ol>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">C. Alterations & Limitations (Section 13)</h3>
            <p>A company can alter its articles by **Special Resolution (75% majority)**. However, there are 7 legal limits:
                <ol class="sub-list" style="margin-left: 20px;">
                    <li>Must not be inconsistent with the Memorandum.</li>
                    <li>Must not contravene the Companies Act (e.g. articles cannot authorize a company to buy its own shares).</li>
                    <li>Must be made in good faith for the benefit of the company as a whole.</li>
                    <li>Must not constitute a fraud on the minority.</li>
                    <li>Cannot bind existing members to take more shares or increase their liability without written consent <span class="law-citation" onclick="jumpToRef('Companies Act Section 24')">(Section 24)</span>.</li>
                    <li>Must not cause a breach of contract with an outsider.</li>
                    <li>Must not sanction anything illegal.</li>
                </ol>
            </p>

            <div class="simple-english-box">
                <h4>Legal Effects of Articles (Section 22 Contract)</h4>
                <p>When registered, the Articles create a binding contract between the company and its members. Key rules from case law:
                    <ul class="sub-list" style="padding-left: 20px; margin-top: 6px;">
                        <li><strong>Members to Company:</strong> Each member is bound as if they signed the Articles. In <span class="law-citation" onclick="jumpToCase('Hickman v. Kent')">Hickman v. Kent</span>, the court stayed a lawsuit because the Articles required disputes to go to arbitration first. (Compare with <span class="law-citation" onclick="jumpToCase('Beattie vs. E& F. Beattie Ltd')">Beattie v. Beattie</span>, which proved a dispute with a director in their capacity as director is not bound).</li>
                        <li><strong>Company to Members:</strong> The company is bound to respect member rights. In <span class="law-citation" onclick="jumpToCase('Wood vs. Odessa Water Works Co.')">Wood v. Odessa Water Works Co.</span>, the court stopped directors from paying dividends in debenture bonds instead of cash, as cash was required by the Articles.</li>
                        <li><strong>Members Inter-se:</strong> There is an implied contract between members. In <span class="law-citation" onclick="jumpToCase('Rayfield vs. Hands')">Rayfield v. Hands</span>, directors (who were also members) were ordered to buy a transferring member's shares as required by the Articles.</li>
                        <li><strong>Company to Outsiders:</strong> The Articles do NOT create a contract with an outsider. In <span class="law-citation" onclick="jumpToCase('Eley vs. Positive Government Life Assurance Company')">Eley v. Positive Government Life Assurance Co.</span>, a member sued for breach because the Articles named him solicitor for life and he was dismissed. He lost because the contract only binds members in their capacity *as members*, not in other capacities like solicitor.</li>
                    </ul>
                </p>
            </div>
        `
    },
    {
        id: "sec-13",
        badge: "Topic VII & VIII",
        title: "Constitution: Memorandum & Object Clause",
        content: `
            <p><strong>A. Nature of the Memorandum (Section 5)</strong></p>
            <p>The Memorandum is the primary document setting up the company's objects and external constitution. Lord Cairns in <span class="law-citation" onclick="jumpToCase('Ashbury Railway Carriage Co Ltd vs. Riche')">Ashbury Railway Carriage Co Ltd vs. Riche</span> defined it as the company's 'charter'.</p>
            <p>Under <span class="law-citation" onclick="jumpToRef('Companies Act Section 5')">Section 5(1)</span>, the Memorandum must be printed, in English, and contain the six clauses: Name, Registered Office, Objects, Liability, Capital, and Association.</p>
            
            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">1. The Name Clause & Reservation</h3>
            <p>Must end in 'Limited' (or 'Private Limited'). S2(1) allows exemptions for non-profits promoting arts, science, or charity. 
                <ul class="custom-list">
                    <li><strong>Undesirable Names (Section 19(2)):</strong> No names with abbreviations, or names the registrar deems undesirable (e.g. suggesting government patronage, 'cooperative', or containing surnames of non-managers).</li>
                    <li><strong>Reservation:</strong> S19(1) allows reserving a name for 30 days (up to 60) for a fee of **Sh 100**.</li>
                    <li><strong>Involuntary Name Changes (Section 20(2)):</strong> If registered with a name too similar to another company by mistake, the registrar can direct a change within 6 months. The change must be made within 14 days by ordinary resolution, subject to a fine of **Sh 100 per day** for default (see case <span class="law-citation" onclick="jumpToCase('Ewing vs. Buttercup Margarine Co. Ltd')">Ewing v. Buttercup Margarine Co. Ltd</span>).</li>
                </ul>
            </p>
 
            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">2. The Registered Office Clause</h3>
            <p>Determines company domicile and nationality. Registers kept at the office include: members, directors, charges, debenture holders, and general meeting minutes. Members can inspect them free (at least 2 hours/day), public pays **Sh 2** per inspection. S107 requires a registered office postal address within 14 days of incorporation.</p>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">3. The Object Clause & Ultra Vires</h3>
            <p>Defines the company's sphere of activities. Any contract beyond these objects is **ultra vires (beyond powers) and void**. It cannot be ratified even if 100% of shareholders agree, as established in the **Ashbury v. Riche** case.</p>
            <p>To avoid this rigidity, promoters use:
                <ul class="custom-list">
                    <li><strong>Independent Object Clauses:</strong> Declares every sub-clause is an independent object (see <span class="law-citation" onclick="jumpToCase('Cotman V. Brougham')">Cotman V. Brougham</span>). (Note: borrowing is a power, not an object, and must support an intra vires object, as decided in <span class="law-citation" onclick="jumpToCase('Re Introductions')">Re Introductions</span>).</li>
                    <li><strong>Subjective Clauses:</strong> Allowing any business the directors deem advantageous (see **Bell Houses v. Gladwell**).</li>
                </ul>
            </p>

            <!-- DIAGRAM 5: Ultra Vires Validity Checklist -->
            <div class="diagram-container">
                <h4 style="margin-bottom: 12px; color: var(--primary);">Figure 5: Contract Validity and the Ultra Vires Checklist</h4>
                <svg class="diagram-svg" viewBox="0 0 760 210">
                    <defs>
                        <marker id="arrow-fig5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-muted)" />
                        </marker>
                    </defs>
                    <!-- Lines -->
                    <path d="M 380 40 L 380 75" class="diagram-line" marker-end="url(#arrow-fig5)" />
                    <path d="M 380 110 L 180 150" class="diagram-line" marker-end="url(#arrow-fig5)" />
                    <path d="M 380 110 L 580 150" class="diagram-line" marker-end="url(#arrow-fig5)" />

                    <!-- Nodes -->
                    <rect x="300" y="10" width="160" height="30" class="diagram-node node-branch" />
                    <text x="380" y="29" class="diagram-text">Third Party Contract Formed</text>

                    <rect x="250" y="75" width="260" height="35" class="diagram-node node-main" />
                    <text x="380" y="96" class="diagram-text diagram-text-title" style="fill: var(--primary);">Within Objects Clause of Memorandum?</text>

                    <rect x="90" y="150" width="180" height="35" class="diagram-node node-success-sub" />
                    <text x="180" y="171" class="diagram-text">INTRA VIRES (Valid & Binding)</text>

                    <rect x="490" y="150" width="180" height="40" class="diagram-node node-error-sub" />
                    <text x="580" y="166" class="diagram-text">ULTRA VIRES (Void ab initio)</text>
                    <text x="580" y="178" class="diagram-text diagram-text-muted">Remedies: Tracing / Restitution</text>
                </svg>
            </div>

            <div class="simple-english-box">
                <h4>Landmark Ultra Vires Case Takeaways</h4>
                <p>Key cases on ultra vires and company assets:
                    <ul class="sub-list" style="padding-left: 20px; margin-top: 6px;">
                        <li><strong>Loss of Substratum:</strong> If a company's main object fails completely, the company must be wound up. In <span class="law-citation" onclick="jumpToCase('Re German Date Coffee Co')">Re German Date Coffee Co (1882)</span>, a company failed to get a German patent. Even though it got a Swedish patent and remained profitable, the court ordered winding up because the main objects failed.</li>
                        <li><strong>No Gratuitous Gifts unless Incidental:</strong> In <span class="law-citation" onclick="jumpToCase('Hutton V Westcorp Railway Co.')">Hutton v. Westcorp Railway Co</span>, paying gratuities to directors of a winding-up company was declared void because the company was no longer a going concern. In the words of Bowen LJ: <em>'There are to be no cakes and ale except such as are required for the benefit of the company.'</em> (Compare with <span class="law-citation" onclick="jumpToCase('Evans v. Brunner Mound & Co.')">Evans v. Brunner Mond & Co</span>, which validated scientific grants to universities to recruit future scientists).</li>
                        <li><strong>Sinclair v. Brougham Tracing Remedy:</strong> Lenders of ultra vires loans cannot sue to recover the debt, but they can **trace** and recover their money if it is kept in a separate account or was used to pay the company's valid debts. Directors can also be sued personally for restitution.</li>
                    </ul>
                </p>
            </div>
        `
    },
    {
        id: "sec-14",
        badge: "Topic IX & X",
        title: "Constructive Notice, Indoor Management & Status Changes",
        content: `
            <p><strong>A. Doctrine of Constructive Notice</strong></p>
            <p>Because a company's Memorandum and Articles are kept at the Registry (a public office), they are public documents. The law presumes that **every third party** dealing with a company has read and understood these documents, regardless of whether they have actually done so. If they sign an ultra vires contract, they cannot sue the company.</p>
            
            <p><strong>B. The Doctrine of Indoor Management (Turquand Rule)</strong></p>
            <p>To balance the harshness of constructive notice, the rule in <span class="law-citation" onclick="jumpToCase('Royal British Bank vs. Turquand')">Royal British Bank vs. Turquand (1856)</span> was established. It states that outsiders dealing with a company are bound to read public documents, but they are **not bound to inquire into the regularity of internal proceedings**. They can assume everything is done regularly.</p>
            
            <!-- IMAGE 4: Turquand indoor management rule illustration -->
            <div style="text-align: center; margin: 20px 0; background-color: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow);">
                <img src="turquand_rule.png" alt="Turquand Indoor Management Rule Concept" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid var(--card-border); max-height: 320px; object-fit: contain;">
                <p style="margin-top: 8px; font-size: 0.9rem; color: var(--text-muted); font-weight: 500; margin-bottom: 12px;">Illustration: Constructive Notice (Public Outside) vs. Indoor Management (Assumed Inside Regularity)</p>
                <a href="turquand_rule.png" download="turquand_rule.png" class="btn" style="text-decoration: none; font-size: 0.82rem; padding: 6px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px;">
                    <svg class="svg-icon" viewBox="0 0 24 24" style="width: 14px; height: 14px; stroke-width: 2.5;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Illustration
                </a>
            </div>

            <h3 style="margin-top:15px; font-size:1.1rem; color:var(--primary);">Exceptions to the Turquand Rule (5 Key Areas)</h3>
            <ol class="sub-list" style="margin-left: 20px; margin-bottom: 20px;">
                <li><strong>Knowledge of Irregularity:</strong> The outsider actually knew the internal rules were violated.</li>
                <li><strong>Negligence:</strong> Suspicious circumstances that should have prompted an inquiry (see case **Smith v. Hull Glass Co**).</li>
                <li><strong>Forgery:</strong> The rule does not protect forged documents. In <span class="law-citation" onclick="jumpToCase('Ruben vs. Great Fungall Consolidated Co.')">Ruben v. Great Fungall Consolidated Co</span>, a company secretary forged the signatures of two directors on a share certificate. The court held the company was not bound.</li>
                <li><strong>Acts Outside Apparent Authority:</strong> An officer acted outside their obvious scope of duty. In <span class="law-citation" onclick="jumpToCase('Anand Lal vs. Dinshaw & Co.')">Anand Lal v. Dinshaw & Co</span>, accepting property from an accountant was declared void because it was outside their apparent authority.</li>
                <li><strong>No Knowledge of Articles:</strong> A person who has not actually consulted the Articles cannot claim protection under the Turquand rule, as they cannot rely on documents of which they were ignorant.</li>
            </ol>

            <p><strong>C. Alteration of Status & Directors' Contracts</strong></p>
            <p>Under <span class="law-citation" onclick="jumpToRef('Companies Act Section 8')">Section 8</span>, a company can alter its Memorandum objects by **Special Resolution (75%)**. Dissenting shareholders (at least 15% of shares or 15% of members) can apply to court within 30 days to challenge it. The court has absolute discretion to confirm, reject, or modify the alteration (as in <span class="law-citation" onclick="jumpToCase('Re Private Boarding House Limited')">Re Private Boarding House Limited</span>). Capital clauses are altered under <span class="law-citation" onclick="jumpToRef('Companies Act Section 63')">Section 63</span>.</p>
            
            <div class="simple-english-box">
                <h4>Directors' Service Contracts & Articles Alterations</h4>
                <p>If a company alters its Articles, it can sometimes affect a director's contract. Three situations exist:
                    <ol class="sub-list" style="margin-left: 20px; margin-top: 6px;">
                        <li><strong>Under Articles Only (No Contract):</strong> The appointment is conditional and can be terminated at any time by altering the Articles.</li>
                        <li><strong>Independent Service Contract:</strong> If a director has an independent contract (e.g. 10 years), the company can still alter the Articles to remove them, but they will be **liable in damages for breach of contract**. In <span class="law-citation" onclick="jumpToCase('Southern Foundries v. Shirlaw')">Southern Foundries v. Shirlaw</span>, Shirlaw was awarded damages because the company altered its articles to dismiss him before his 10-year term ended.</li>
                        <li><strong>Contract Subject to Articles:</strong> If the contract is subject to the Articles, and the Articles allow dismissal, they cannot claim damages. In <span class="law-citation" onclick="jumpToCase('Peter Waiganjo v Unga Ltd')">Peter Waiganjo v Unga Ltd</span> / <span class="law-citation" onclick="jumpToCase('Read v. Astoria Garage')">Read v. Astoria Garage</span>, dismissal by general meeting was valid because the contract was subject to the Articles.</li>
                    </ol>
                </p>
            </div>
        `
    }
];
