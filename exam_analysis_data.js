// EACQ 3214 & 3114 Past Paper Analysis & Wednesday Exam Predictions Data

window.PAST_PAPER_DATA = [
    {
        id: "pp-1a",
        label: "Q1(a)",
        title: "Three Ways a Director May Hold Office",
        marks: "5 Marks",
        question: "With support of case law, State and Explain THREE (3) ways through which a director may hold office.",
        targetSection: "sec-14",
        modelAnswer: `
            <p>Under company law and the articles of association, a director's tenure and the legal basis on which they hold office can fall under three primary contractual arrangements. These determine their rights to compensation and the company's liability if they are dismissed:</p>
            <ul class="custom-list">
                <li><strong>1. Office Held Under Articles Only (No Independent Contract):</strong>
                    <br>The director is appointed strictly under the provisions of the Articles of Association and has no independent service contract. Since the Articles can be altered by a special resolution (75%), the company can alter its Articles to terminate the director's office at any time. The director cannot claim damages for wrongful dismissal because their tenure was always conditional upon the Articles.
                </li>
                <li><strong>2. Office Held Under an Independent Service Contract:</strong>
                    <br>The director has a separate, independent employment contract with the company for a fixed term (e.g., 5 or 10 years). While the company retains the power to alter its Articles to remove the director from office (which it must have), doing so before the expiration of the contract constitutes a breach of the independent contract. The company will be liable in damages to the director. 
                    <br><em>Legal Authority:</em> In <span class="law-citation" onclick="jumpToCase('Southern Foundries v. Shirlaw')">Southern Foundries v. Shirlaw (1940)</span>, the court awarded damages to a director whose 10-year term was cut short after the company altered its articles to facilitate his removal.
                </li>
                <li><strong>3. Office Held Under a Contract 'Subject to the Articles':</strong>
                    <br>The director has a contract of service, but the contract explicitly states that it is subject to the Articles of Association (or the Articles are incorporated by reference). If the Articles are altered to allow for the director's removal, or if the Articles contain a clause allowing the company to dismiss the director, the director is bound by that alteration. They cannot sue for breach of contract because their contract itself permitted such alteration.
                    <br><em>Legal Authority:</em> In <span class="law-citation" onclick="jumpToCase('Peter Waiganjo v Unga Ltd')">Peter Waiganjo v Unga Ltd</span> and <span class="law-citation" onclick="jumpToCase('Read v. Astoria Garage')">Read v. Astoria Garage (1952)</span>, the courts held that a dismissal by the general meeting was valid and did not attract damages because the directors' appointments were explicitly subject to the articles, which allowed for such removal.
                </li>
            </ul>
        `
    },
    {
        id: "pp-1b",
        label: "Q1(b)",
        title: "Methods to Curb Rigidity of the Ultra Vires Doctrine",
        marks: "5 Marks",
        question: "With support of case law, State and Explain TWO (2) methods courts/promoters have introduced to curb the evasion/rigidity of the ultra vires doctrine.",
        targetSection: "sec-13",
        modelAnswer: `
            <p>The <strong>doctrine of Ultra Vires</strong> (established in <span class="law-citation" onclick="jumpToCase('Ashbury Railway Carriage v. Riche')">Ashbury Railway Carriage v. Riche</span>) states that any contract entered into by a company that falls outside the objects clause of its Memorandum of Association is void and cannot be ratified. To protect transactions and curb this rigidity, two major methods were introduced:</p>
            <ul class="custom-list">
                <li><strong>1. Independent Object Clauses:</strong>
                    <br>Promoters began inserting a clause at the end of the objects clause stating that each sub-clause must be construed as a separate, independent main object of the company (rather than being subsidiary to the first object). The courts accepted this practice, making it extremely difficult to prove that a transaction was ultra vires since almost any activity listed in the long list of sub-clauses could be considered an independent main object.
                    <br><em>Legal Authority:</em> In <span class="law-citation" onclick="jumpToCase('Cotman V. Brougham')">Cotman v. Brougham (1918)</span>, the House of Lords held that an underwriting transaction was valid because the sub-clause authorizing it was declared to be an independent object.
                </li>
                <li><strong>2. Subjective / 'Bell Houses' Clauses:</strong>
                    <br>Promoters inserted clauses allowing the company to carry on any other business which the directors, in their subjective opinion, believe can be advantageously carried on in connection with or in addition to the company's existing business. The court held that this effectively left the scope of business to the honest opinion of the directors, virtually eliminating the rigidity of the doctrine.
                    <br><em>Legal Authority:</em> In <span class="law-citation" onclick="jumpToCase('Bell Houses Ltd v. City Wall Properties Ltd')">Bell Houses Ltd v. City Wall Properties Ltd (1966)</span>, the Court of Appeal held that a contract to introduce a financier for a fee was intra vires because of a subjective clause that allowed directors to engage in any business they deemed advantageous.
                </li>
                <li><strong>3. The Doctrine of Implied & Incidental Powers (Judicial Approach):</strong>
                    <br>The courts ruled that companies have implied powers to do things that are reasonably incidental or consequential to the carrying out of their express objects.
                    <br><em>Legal Authority:</em> In <span class="law-citation" onclick="jumpToCase('Attorney-General v. Great Eastern Railway Co.')">Attorney-General v. Great Eastern Railway Co. (1880)</span>, the court held that whatever may fairly be regarded as incidental to, or consequential upon, those things which the Legislature has authorized, ought not to be held as ultra vires.
                </li>
            </ul>
        `
    },
    {
        id: "pp-1c",
        label: "Q1(c)",
        title: "Documents Delivered Alongside the Memorandum of Association",
        marks: "5 Marks",
        question: "State and Explain FIVE (5) documents that company promoters deliver alongside the Memorandum of Association to the Registrar of companies.",
        targetSection: "sec-8",
        modelAnswer: `
            <p>Under Section 8 of the Companies Act, when promoters apply for the incorporation of a limited liability company, they must deliver the following documents alongside the Memorandum of Association to the Registrar of Companies:</p>
            <ol class="sub-list" style="margin-left: 20px;">
                <li><strong>1. Articles of Association:</strong> 
                    <br>The document containing the internal regulations, rules, and by-laws governing the internal management of the company (such as the transfer of shares, voting rights, directors' powers, and meetings).
                </li>
                <li><strong>2. Consent to Act as Director (Form No. 209):</strong>
                    <br>A document signed by each proposed director of the company expressing their formal consent to act as a director, ensuring that no one is appointed as a director without their knowledge.
                </li>
                <li><strong>3. List of Consenting Directors (Form No. 210):</strong>
                    <br>A statutory form detailing the names, descriptions, addresses, occupations, and dates of birth of all the proposed directors of the company.
                </li>
                <li><strong>4. Statement of Nominal Share Capital:</strong>
                    <br>A document showing the total share capital the company is authorized to issue and the division of that capital into shares of fixed amounts. This is filed for stamp duty assessment purposes under the Stamp Duty Act.
                </li>
                <li><strong>5. Declaration of Compliance (Form No. 208):</strong>
                    <br>A statutory declaration made by an advocate of the High Court engaged in the formation of the company, or by a person named in the articles as a director or secretary, stating that all the registration prerequisites of the Companies Act have been fully complied with.
                </li>
            </ol>
        `
    },
    {
        id: "pp-1d",
        label: "Q1(d)",
        title: "Prerequisites for Formation & Registration of a Company",
        marks: "5 Marks",
        question: "State FIVE (5) prerequisites needed in the formation and registration of a limited company.",
        targetSection: "sec-8",
        modelAnswer: `
            <p>To successfully form and register a limited liability company in Kenya, promoters must fulfill the following five prerequisites:</p>
            <ol class="sub-list" style="margin-left: 20px;">
                <li><strong>1. Approved Name Search and Reservation:</strong> Promoters must submit proposed names to the Registrar of Companies for a name search. Once approved, the name is reserved for 30 days to prevent others from using it.</li>
                <li><strong>2. Minimum Number of Subscribers:</strong> For a private company, at least 1 person (post-2015 Companies Act amendments) must subscribe to the Memorandum, while a public company requires at least 7 subscribers.</li>
                <li><strong>3. Prepared Memorandum and Articles of Association:</strong> Promoters must draft these constitution documents, which must be signed by the subscribers and witnessed by an advocate.</li>
                <li><strong>4. Declaration of a Registered Physical Office:</strong> A physical and postal address where the company's statutory books will be kept and where legal notices can be served must be declared (notifying the Registrar within 14 days of incorporation).</li>
                <li><strong>5. Payment of Registration Fees and Stamp Duty:</strong> Promoters must pay the prescribed incorporation fees and the stamp duty levied on the company's authorized nominal share capital.</li>
            </ol>
        `
    },
    {
        id: "pp-1e",
        label: "Q1(e)",
        title: "Distinctions Between Public and Private Companies",
        marks: "5 Marks",
        question: "State and Explain FIVE (5) distinctions between a Public and Private Company.",
        targetSection: "sec-7",
        modelAnswer: `
            <p>Public and Private companies differ significantly in their scale, regulation, and share structures. The key distinctions include:</p>
            <table class="comp-card" style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.92rem; text-align: left;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--card-border);">
                        <th style="padding: 8px;">Feature</th>
                        <th style="padding: 8px; color: var(--primary);">Private Company</th>
                        <th style="padding: 8px; color: var(--secondary);">Public Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">1. Minimum Membership</td>
                        <td style="padding: 8px;">Minimum of 1 member (under the 2015 Act).</td>
                        <td style="padding: 8px;">Minimum of 7 members.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">2. Transfer of Shares</td>
                        <td style="padding: 8px;">Restricted by the Articles (requires director approval).</td>
                        <td style="padding: 8px;">Freely transferable to the public (listed on stock exchange).</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">3. Public Subscription</td>
                        <td style="padding: 8px;">Prohibited from inviting the public to subscribe for shares.</td>
                        <td style="padding: 8px;">Allowed to issue a prospectus to invite the public to buy shares.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">4. Minimum Directors</td>
                        <td style="padding: 8px;">Requires at least 1 director.</td>
                        <td style="padding: 8px;">Requires at least 3 directors.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">5. Starting Business</td>
                        <td style="padding: 8px;">Can commence business immediately on incorporation.</td>
                        <td style="padding: 8px;">Requires a trading certificate from the Registrar after filing statement in lieu of prospectus.</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    {
        id: "pp-1f",
        label: "Q1(f)",
        title: "Rules Governing Rights of Partners (Section 28)",
        marks: "5 Marks",
        question: "State FIVE (5) rules governing the rights to Partners in their dealings with each other as per Section 28 of the Partnership Act (referenced as Companies Act in exam paper).",
        targetSection: "sec-4",
        modelAnswer: `
            <p>Unless the partners have signed a Partnership Deed that states otherwise, <span class="law-citation" onclick="jumpToRef('Partnerships Act Section 28')">Section 28 of the Partnership Act</span> establishes default rules governing the rights of partners in relation to each other:</p>
            <ul class="custom-list">
                <li><strong>1. Equal Share in Capital and Profits:</strong> All partners are entitled to share equally in the capital and profits of the business, and must contribute equally to the losses sustained by the firm.</li>
                <li><strong>2. Right to Management:</strong> Every partner has the right to take part in the active management of the partnership business.</li>
                <li><strong>3. Right to Indemnity:</strong> The firm must indemnify (reimburse) every partner for payments made and personal liabilities incurred in the ordinary and proper conduct of the firm's business.</li>
                <li><strong>4. Interest on Advances:</strong> A partner making any actual payment or advance beyond the amount of capital they agreed to contribute is entitled to interest at the rate of **6% per annum** from the date of the payment or advance.</li>
                <li><strong>5. Introduction of New Partners:</strong> No person may be introduced as a new partner without the unanimous consent of all existing partners.</li>
                <li><strong>6. Ordinary Differences Decision:</strong> Ordinary differences during the business may be decided by a majority of the partners, but no change can be made to the nature of the partnership business without unanimous consent of all partners.</li>
            </ul>
        `
    },
    {
        id: "pp-2a",
        label: "Q2(a)",
        title: "Distinguishing Companies from Unincorporated Associations",
        marks: "10 Marks",
        question: "Discuss FIVE (5) characteristics which distinguish Limited Liability Companies from other Unincorporated Associations.",
        targetSection: "sec-6",
        modelAnswer: `
            <p>Incorporated companies possess unique legal features that distinguish them from unincorporated bodies (such as partnerships, clubs, and sole proprietorships). Five major distinguishing characteristics include:</p>
            <ol class="sub-list" style="margin-left: 20px;">
                <li><strong>1. Separate Legal Personality (Corporate Status):</strong>
                    <br>Upon incorporation, a company becomes an artificial legal person distinct from its shareholders (<span class="law-citation" onclick="jumpToCase('Salomon v. Salomon & Co. Ltd')">Salomon v. Salomon (1897)</span>). Unincorporated associations have no separate identity; they are merely groups of individuals, and lawsuits must name the individual members rather than the group.
                </li>
                <li><strong>2. Limited Liability:</strong>
                    <br>In a company, members' liability is limited to the amount unpaid on their shares. If the company fails, members lose only their investment. In unincorporated associations (like partnerships), owners/partners have **unlimited liability**, meaning their personal assets can be seized by creditors to pay business debts.
                </li>
                <li><strong>3. Perpetual Succession:</strong>
                    <br>A company exists in perpetuity and is unaffected by the death, insanity, retirement, or bankruptcy of its shareholders. It can only be dissolved through a formal legal process (winding up). Unincorporated associations automatically dissolve upon the death or exit of a member/partner unless an agreement explicitly overrides this.
                </li>
                <li><strong>4. Property Ownership:</strong>
                    <br>A company can own, buy, and sell property in its own name. The assets belong to the company, not the shareholders (<span class="law-citation" onclick="jumpToCase('Macaura v. Northern Assurance Co. Ltd')">Macaura v. Northern Assurance Co. Ltd (1925)</span>). In unincorporated associations, property must be held in the names of trustees or the members jointly, as the group itself cannot own property.
                </li>
                <li><strong>5. Capacity to Sue and Be Sued:</strong>
                    <br>A company sues and is sued in its registered name to enforce its corporate rights (<span class="law-citation" onclick="jumpToCase('Foss v. Harbottle')">Foss v. Harbottle (1843)</span>). Unincorporated associations cannot sue in their group name; action must be brought by all individual members collectively or via representative actions.
                </li>
            </ol>
        `
    },
    {
        id: "pp-2b",
        label: "Q2(b)",
        title: "Circumstances of Partnership Dissolution",
        marks: "10 Marks",
        question: "Discuss Four (4) circumstances through which a partnership may be dissolved.",
        targetSection: "sec-4",
        modelAnswer: `
            <p>A partnership can be dissolved under various circumstances as provided in Cap 29. The four primary grounds of dissolution are:</p>
            <ol class="sub-list" style="margin-left: 20px;">
                <li><strong>1. Dissolution by Expiration or Notice (Section 36):</strong>
                    <br>If the partnership was entered into for a fixed term, it dissolves upon the expiration of that term. If entered into for a single adventure or undertaking, it dissolves upon its completion. If entered into for an undefined duration (partnership at will), it dissolves when any partner gives notice of intention to dissolve to the others.
                </li>
                <li><strong>2. Dissolution by Death, Bankruptcy, or Charge (Section 37):</strong>
                    <br>Subject to any agreement between the partners, a partnership is automatically dissolved by the death or bankruptcy of any partner. Additionally, if a partner suffers their share of the partnership property to be charged by court order for their separate debt, the other partners have the option to dissolve the firm.
                </li>
                <li><strong>3. Dissolution by Illegality (Section 38):</strong>
                    <br>A partnership is automatically dissolved by the happening of any event which makes it unlawful for the business of the firm to be carried on, or for the members of the firm to carry it on in partnership.
                </li>
                <li><strong>4. Dissolution by Court Order (Section 39):</strong>
                    <br>A partner can apply to the court for a decree of dissolution on grounds such as:
                    <ul class="sub-list" style="padding-left: 20px; margin-top: 4px;">
                        <li>A partner is declared insane or permanently incapable of performing their duties.</li>
                        <li>A partner is guilty of conduct calculated to prejudicially affect the business.</li>
                        <li>A partner willfully or persistently commits a breach of the partnership agreement.</li>
                        <li>The business can only be carried on at a loss.</li>
                        <li>Circumstances render it just and equitable that the partnership be dissolved.</li>
                    </ul>
                </li>
            </ol>
        `
    },
    {
        id: "pp-3",
        label: "Q3",
        title: "Advantages & Disadvantages of Incorporation",
        marks: "20 Marks",
        question: "Discuss the Advantages and Disadvantages of Incorporation of Companies as per the Companies Act 2015.",
        targetSection: "sec-9",
        modelAnswer: `
            <p>Incorporation under the Companies Act 2015 provides a business with a distinct legal structure. It has both significant benefits and notable drawbacks:</p>
            <h3 style="color: var(--success); font-size: 1.1rem; margin-top: 10px;">Advantages of Incorporation</h3>
            <ul class="custom-list">
                <li><strong>Separate Legal Personality:</strong> The company is an independent legal entity. It can enter into contracts, own property, and operate in its own name, shielding the personal assets of the owners.</li>
                <li><strong>Limited Liability:</strong> The financial liability of shareholders is limited to the unpaid amount on their shares. If the company accumulates debts or goes bankrupt, shareholders' personal wealth is protected.</li>
                <li><strong>Perpetual Succession:</strong> The company survives the death, retirement, or transfer of shares of its owners. This stability is critical for long-term construction contracts and financing.</li>
                <li><strong>Transferability of Shares:</strong> Ownership is easily divisible and transferable through share transfers. In public companies, this allows listing on the stock exchange to raise massive public capital.</li>
                <li><strong>Ability to Raise Capital:</strong> Companies can secure borrowing by issuing debentures and creating floating charges over their changing assets, which is not available to unincorporated sole traders.</li>
            </ul>
            <h3 style="color: var(--error); font-size: 1.1rem; margin-top: 15px;">Disadvantages of Incorporation</h3>
            <ul class="custom-list">
                <li><strong>High Setup and Maintenance Cost:</strong> Incorporation requires substantial registration fees, stamp duty on capital, legal fees, and ongoing maintenance expenses (such as mandatory annual auditing, filing returns, and bookkeeping).</li>
                <li><strong>Loss of Privacy and Publicity:</strong> Companies must make their records public. They are required to file accounts, directors' details, and shareholdings with the Registrar, allowing public inspection under Section 384.</li>
                <li><strong>Rigidity of the Ultra Vires Doctrine:</strong> A company can only legally perform activities listed in its objects clause. Entering into contracts outside this scope is ultra vires and void. This limits the company's flexibility to pivot to other business avenues without formal articles alterations.</li>
                <li><strong>The Agency Problem:</strong> There is a division between ownership (shareholders) and control (directors). Directors may make decisions that serve their own interests rather than maximizing shareholder wealth.</li>
                <li><strong>Formal Winding Up Procedures:</strong> Dissolving a company is highly complex and costly, requiring the appointment of a liquidator and settling statutory preferential debts under Section 311.</li>
            </ul>
        `
    },
    {
        id: "pp-4",
        label: "Q4",
        title: "Lifting the Corporate Veil Exceptions",
        marks: "20 Marks",
        question: "With support of case law, describe TWO (2) ways through which the lifting of the corporate veil can be carried out as exceptions to the rule in Salomon v. Salomon & Co Ltd [1897] AC 22.",
        targetSection: "sec-10",
        modelAnswer: `
            <p>The <strong>lifting of the corporate veil</strong> occurs when the courts or statutes ignore the separate legal personality of a company to hold the underlying shareholders or directors personally liable. The two main pathways for this exception are:</p>
            <ul class="custom-list">
                <li><strong>1. Lifting by the Courts (Common Law Grounds):</strong>
                    <br>Courts will lift the corporate veil when the corporate structure is used as a vehicle for fraud, evasion of legal obligations, or sham transactions.
                    <br><em>Case Authority 1 (Evasion of Contract):</em> In <span class="law-citation" onclick="jumpToCase('Gilford Motor Co v. Horne')">Gilford Motor Co v. Horne (1933)</span>, a managing director agreed not to solicit his former employer's customers. He set up a dummy company in his wife's name to bypass this agreement. The court pierced the veil and granted an injunction against both him and the company, declaring it a mere 'cloak or sham'.
                    <br><em>Case Authority 2 (Evading Transfer):</em> In <span class="law-citation" onclick="jumpToCase('Jones v. Lipman')">Jones v. Lipman (1962)</span>, a man contracted to sell land but changed his mind. To avoid transferring it, he formed a company and transferred the land to it. The court pierced the veil and ordered specific performance against the company, calling it a 'mask' Lipman held to avoid his contract.
                </li>
                <li><strong>2. Lifting by Statutes (Legislative Provisions):</strong>
                    <br>The Companies Act contains specific provisions that strip away limited liability under certain conditions.
                    <br><em>Statutory Authority 1 (Fraudulent Trading - Section 323):</em> If during winding up, it appears the business was carried on with intent to defraud creditors, the court can declare the directors personally liable for all the debts. They can also face criminal prosecution (3 to 10 years). Cases include <span class="law-citation" onclick="jumpToCase('Re William Leitch Brothers Ltd')">Re William Leitch Brothers Ltd</span>.
                    <br><em>Statutory Authority 2 (Reduction of Membership below Minimum - Section 31):</em> If a company carries on business for more than 6 months with members below the legal minimum (1 for private, 7 for public), any remaining member who knows of this is personally liable for all debts contracted during that period.
                </li>
            </ul>
        `
    },
    {
        id: "pp-5",
        label: "Q5",
        title: "Restrictions on a Company's Power to Alter its Articles",
        marks: "20 Marks",
        question: "Discuss the legal restrictions on a company’s power to alter its articles.",
        targetSection: "sec-12",
        modelAnswer: `
            <p>Under Section 13 of the Companies Act, a company has the power to alter its Articles of Association by passing a <strong>Special Resolution (75% majority)</strong>. However, this power is not absolute and is subject to several legal restrictions to protect minority shareholders and prevent abuse of power:</p>
            <ol class="sub-list" style="margin-left: 20px;">
                <li><strong>1. Must Not Contravene the Memorandum of Association:</strong>
                    <br>The Memorandum is the dominant document. If there is a conflict between an alteration in the Articles and the Memorandum, the alteration is void to the extent of the inconsistency.
                </li>
                <li><strong>2. Must Not Contravene the Companies Act or Statutory Law:</strong>
                    <br>Articles cannot authorize anything illegal or restricted by the Companies Act. For example, a company cannot alter its articles to allow it to buy back its own shares without complying with the strict purchase rules of the Act.
                </li>
                <li><strong>3. Must Be Made in Good Faith for the Benefit of the Company as a Whole:</strong>
                    <br>The alteration must honestly benefit the company as a commercial entity, not just the majority shareholders. 
                    <br><em>Legal Authority:</em> In <span class="law-citation" onclick="jumpToCase('Allen v. Gold Reefs of West Africa')">Allen v. Gold Reefs of West Africa (1900)</span>, the court upheld an alteration creating a lien on fully paid shares because it was done in good faith to recover debts owed to the company by a deceased member.
                </li>
                <li><strong>4. Must Not Constitute a Fraud on the Minority:</strong>
                    <br>The majority cannot use their 75% voting power to alter the articles to expropriate (seize) the shares or property of the minority shareholders.
                    <br><em>Legal Authority:</em> In <span class="law-citation" onclick="jumpToCase('Brown v. British Abrasive Wheel Co.')">Brown v. British Abrasive Wheel Co. (1919)</span>, the court declared an alteration forcing minority members to sell their shares to the 98% majority void because it was not for the benefit of the company, but only for the majority.
                </li>
                <li><strong>5. Cannot Increase Member Liability Without Written Consent (Section 24):</strong>
                    <br>A company cannot alter its articles to force an existing member to purchase more shares or increase their liability to contribute money to the company unless the member consents in writing.
                </li>
                <li><strong>6. Must Not Cause a Breach of Contract with an Outsider:</strong>
                    <br>While a company has the right to alter its articles (even if the alteration breaches an employment contract), doing so will make it liable in damages to the injured party. The alteration is valid, but the company must pay for the breach.
                    <br><em>Legal Authority:</em> In <span class="law-citation" onclick="jumpToCase('Southern Foundries v. Shirlaw')">Southern Foundries v. Shirlaw (1940)</span>, altering the articles to dismiss a managing director before his contract expired resulted in the company being held liable for damages.
                </li>
            </ol>
        `
    }
];

window.PREDICTED_QUESTIONS_DATA = [
    {
        id: "pred-1",
        title: "Promoter Liability & Pre-Incorporation Contracts",
        predictionReasoning: "High-probability topic. The examiner frequently tests the personal liability of promoters before a company is registered.",
        question: "Examine the legal status of pre-incorporation contracts and the liability of company promoters. Cite relevant case law to support your answer.",
        targetSection: "sec-8",
        answer: `
            <p><strong>A. Legal Status of Pre-Incorporation Contracts:</strong></p>
            <p>A pre-incorporation contract is an agreement entered into by a promoter on behalf of a company before the company is registered. Because a company does not exist before registration, it has no legal capacity and cannot contract. Consequently:</p>
            <ul class="custom-list">
                <li><strong>No Retrospective Ratification:</strong> The company cannot ratify the contract after registration. Ratification requires the principal to have existed at the time of contracting.</li>
                <li><strong>Promoter's Personal Liability:</strong> The promoter who signs the contract is personally liable on it.</li>
            </ul>
            <p><em>Case Authority:</em> In <span class="law-citation" onclick="jumpToCase('Kelner v. Baxter')">Kelner v. Baxter (1866)</span>, promoters purchased wine on behalf of a proposed hotel company. The company was registered and consumed the wine, but collapsed before paying. The court held that the company was not bound, and the promoters were personally liable to pay for the wine.</p>
            <p>Similarly, in <span class="law-citation" onclick="jumpToCase('Newborne v. Sensolid (Great Britain) Ltd')">Newborne v. Sensolid (Great Britain) Ltd (1954)</span>, a promoter signed a contract as 'Leopold Newborne (London) Ltd'. When the buyer breached, Leopold sued. The court dismissed the suit, holding that since the company did not exist at signing, the contract was a nullity and the promoter could not enforce it.</p>
            
            <p><strong>B. How to Ecode/Avoid Personal Liability:</strong></p>
            <p>Promoters can protect themselves through two legal methods:</p>
            <ul class="custom-list">
                <li><strong>Novation:</strong> After incorporation, the old contract is terminated, and a completely new contract is drafted and signed by the company. The company replaces the promoter.</li>
                <li><strong>Agreement Exclude Liability:</strong> The promoter can insert a clause stating they will not be personally liable if the company is not incorporated, or that the contract is subject to the company's formation.</li>
            </ul>
        `
    },
    {
        id: "pred-2",
        title: "Salomon vs. Macaura Separate Personality Application",
        predictionReasoning: "Examiners love testing separate legal entity rules via practical scenarios involving insurance or debt.",
        question: "Kamau incorporates 'Kamau Builders Ltd' and holds 99% of the shares. He transfers his timber yard to the company. However, he keeps the insurance policy in his own name. A fire destroys the timber. The insurance company refuses to pay. Advise Kamau with reference to case law.",
        targetSection: "sec-9",
        answer: `
            <p><strong>Advice to Kamau:</strong></p>
            <p>Kamau cannot recover compensation from the insurance company because of the principle of separate legal personality and the rules of insurable interest:</p>
            <ul class="custom-list">
                <li><strong>Application of Salomon Rule:</strong> Once registered, 'Kamau Builders Ltd' is a separate legal person distinct from Kamau. The timber yard belongs entirely to the company, not to Kamau, even though he owns 99% of the shares.</li>
                <li><strong>No Insurable Interest:</strong> To claim insurance, the policyholder must have a legal interest in the property. A shareholder, even a majority one, has no legal or equitable interest in the assets of the company.</li>
                <li><strong>Inconsistency of Policy Holder:</strong> The policy was in Kamau's name, but the property burned belonged to the company. The company cannot claim because it has no policy, and Kamau cannot claim because he has no interest in the timber.</li>
            </ul>
            <p><em>Direct Legal Precedent:</em> This scenario matches <span class="law-citation" onclick="jumpToCase('Macaura v. Northern Assurance Co. Ltd')">Macaura v. Northern Assurance Co. Ltd (1925)</span>, where the House of Lords held that the owner of a timber estate who sold it to a company but kept the policy in his own name had no insurable interest in the timber, and the insurer was legally justified in refusing to pay.</p>
        `
    },
    {
        id: "pred-3",
        title: "The Turquand Rule (Indoor Management) & Its Exceptions",
        predictionReasoning: "A common exam topic involving third-party contract validity when company directors exceed their authority.",
        question: "Explain the 'Rule in Royal British Bank v. Turquand' (Doctrine of Indoor Management) and discuss three exceptions where a third party cannot claim its protection.",
        targetSection: "sec-14",
        answer: `
            <p><strong>A. The Rule in Turquand's Case:</strong></p>
            <p>Outsiders dealing with a company are presumed to have read its public documents (Memorandum and Articles) under the Doctrine of Constructive Notice. However, they are **not bound to inquire into the regularity of internal proceedings**.</p>
            <p>If the Articles show a director has authority to borrow money provided a resolution is passed, a lender can assume the resolution was passed. They are not required to inspect the company's minute books.</p>
            <p><em>Case Authority:</em> In <span class="law-citation" onclick="jumpToCase('Royal British Bank vs. Turquand')">Royal British Bank vs. Turquand (1856)</span>, directors borrowed money on a bond. The Articles allowed borrowing if authorized by resolution. No resolution was passed. The court held the bank was entitled to assume the internal resolution was passed, and the bond was binding.</p>
            
            <p><strong>B. Three Exceptions to the Rule:</strong></p>
            <p>An outsider cannot claim protection under the Turquand rule in the following circumstances:</p>
            <ol class="sub-list" style="margin-left: 20px;">
                <li><strong>1. Knowledge of the Irregularity:</strong> The outsider had actual knowledge that the internal rules were not complied with at the time of the transaction.</li>
                <li><strong>2. Forgery:</strong> The rule does not apply to transactions built on forged documents. In <span class="law-citation" onclick="jumpToCase('Ruben vs. Great Fungall Consolidated Co.')">Ruben v. Great Fingall Consolidated Co (1906)</span>, a company secretary forged directors' signatures on a share certificate. The court held the company was not bound to recognize it.</li>
                <li><strong>3. Suspicion/Negligence:</strong> If the circumstances are so unusual or suspicious that a reasonable person would have made inquiries, and they failed to do so, they are negligent and lose protection (e.g., <span class="law-citation" onclick="jumpToCase('Smith v. Hull Glass Co')">Smith v. Hull Glass Co</span>).</li>
            </ol>
        `
    },
    {
        id: "pred-4",
        title: "Partnership Dissolution by Court Order",
        predictionReasoning: "Partnerships (Cap 29) are highly tested. Focuses on court decrees for dissolution under Section 39.",
        question: "Discuss the grounds under which a partner may apply to the court for a decree of dissolution of a partnership business as per Section 39 of the Partnership Act.",
        targetSection: "sec-4",
        answer: `
            <p>Under Section 39 of the Partnership Act (Cap 29), a partner can apply to the court to dissolve the firm. The court may grant a decree on the following six grounds:</p>
            <ul class="custom-list">
                <li><strong>1. Insanity:</strong> When a partner is found to be of unsound mind by a court. The application can be made by the other partners or by the insane partner's representative.</li>
                <li><strong>2. Permanent Incapacity:</strong> When a partner becomes permanently incapable of performing their part of the partnership contract (e.g., severe physical paralysis).</li>
                <li><strong>3. Prejudicial Conduct:</strong> When a partner is guilty of conduct calculated to affect prejudicially the carrying on of the business (e.g., a medical partner committing medical malpractice).</li>
                <li><strong>4. Willful or Persistent Breach:</strong> When a partner willfully or persistently commits a breach of the partnership agreement, making it virtually impossible for the other partners to work with them.</li>
                <li><strong>5. Carrying on at a Loss:</strong> When the business of the partnership can only be carried on at a loss, showing no commercial viability.</li>
                <li><strong>6. Just and Equitable:</strong> Whenever circumstances arise which, in the opinion of the court, render it just and equitable that the partnership be dissolved (such as a total deadlock between partners).</li>
            </ul>
        `
    },
    {
        id: "pred-5",
        title: "Alteration of Articles & Breach of Contract",
        predictionReasoning: "Tests the collision between corporate power (special resolution) and contractual obligations.",
        question: "Can a company alter its articles to dismiss a director who has an independent 10-year contract? Explain the legal consequences.",
        targetSection: "sec-14",
        answer: `
            <p>Yes, a company has a statutory right to alter its articles to remove a director under Section 13, but there are significant legal consequences:</p>
            <ul class="custom-list">
                <li><strong>Validity of Alteration:</strong> The alteration is valid. A company cannot contract out of its statutory power to alter its articles.</li>
                <li><strong>Liability for Damages:</strong> While the removal from office is valid, the company will be held **liable in damages** for breach of the independent contract. The statutory power to alter the articles does not protect the company from paying damages for breaking its contracts.</li>
            </ul>
            <p><em>Leading Case:</em> In <span class="law-citation" onclick="jumpToCase('Southern Foundries v. Shirlaw')">Southern Foundries v. Shirlaw (1940)</span>, Shirlaw was appointed managing director for 10 years. The company subsequently altered its articles to allow a holding company to remove any director. When they removed Shirlaw, the House of Lords awarded him substantial damages, holding that a company cannot bypass its contractual liabilities by altering its articles.</p>
        `
    },
    {
        id: "pred-6",
        title: "Lifting the Corporate Veil: Fraudulent Trading (Section 323)",
        predictionReasoning: "Statutory exceptions to the Salomon rule are highly examinable, particularly during winding up.",
        question: "Discuss the statutory exception of 'Fraudulent Trading' under Section 323 of the Companies Act as a ground for lifting the corporate veil during liquidation. Cite case law.",
        targetSection: "sec-11",
        answer: `
            <p><strong>A. Meaning of Section 323 (Fraudulent Trading):</strong></p>
            <p>Under Section 323 of the Companies Act, if in the course of winding up a company it appears that any business of the company has been carried on with **intent to defraud creditors** of the company or for any fraudulent purpose, the court can lift the corporate veil.</p>
            <p><strong>B. Legal Consequences:</strong></p>
            <ul class="custom-list">
                <li><strong>Personal Liability:</strong> The court can declare that any directors who were knowingly parties to the carrying on of the business in that manner shall be **personally responsible**, without any limitation of liability, for all or any of the debts of the company.</li>
                <li><strong>Criminal Sanction:</strong> Under Section 323(3), such directors commit an offence and are liable on conviction to imprisonment for a term of **3 to 10 years** or a heavy fine.</li>
            </ul>
            <p><strong>C. High Judicial Standard:</strong></p>
            <p>The courts require proof of **actual dishonesty and real fraud** (positive actions), not merely running a business while insolvent or being passive.</p>
            <p><em>Case Precedent:</em> In <span class="law-citation" onclick="jumpToCase('Re William Leitch Brothers Ltd')">Re William Leitch Brothers Ltd (1932)</span>, the court held that if a company continues to carry on business and orders goods on credit when there is to the knowledge of the directors no reasonable prospect of the company being able to pay, it constitutes intent to defraud.</p>
            <p>Contrast with <span class="law-citation" onclick="jumpToCase('Re Maidstone Distributors Co')">Re Maidstone Distributors Co (1973)</span>, where the court held that a director who merely failed to take steps to wind up the company was not personally liable, as passivity does not equal active fraudulent trading.</p>
        `
    },
    {
        id: "pred-7",
        title: "Citizenship Acquisition & Revocation (Constitution 2010)",
        predictionReasoning: "Lecturers heavily test Articles 14, 15, and 17 of the Constitution of Kenya 2010 regarding citizenship status scenarios.",
        question: "Mark was registered as a Kenyan citizen in 2020. In 2026, he is convicted of treason and sentenced to 10 years in prison. The government initiates revocation of his citizenship. In the same week, a child appearing to be 5 years old is found abandoned in Marsabit county. Advise Mark and determine the citizenship status of the child.",
        targetSection: "sec-1",
        answer: `
            <p><strong>1. Advice to Mark (Revocation of Citizenship):</strong></p>
            <p>Under <span class="law-citation" onclick="jumpToRef('Constitution Article 17')">Article 17(1) of the Constitution of Kenya 2010</span>, citizenship acquired by registration can be legally revoked by the state under specific conditions. Mark's situation falls squarely under these rules:</p>
            <ul class="custom-list">
                <li><strong>Treason Conviction (Article 17(1)(d)):</strong> The constitution explicitly provides that registered citizenship may be revoked if the person has been convicted of treason and sentenced to a prison term of **at least 7 years**. Mark was sentenced to 10 years, which satisfies this threshold.</li>
                <li><strong>Timing:</strong> Unlike the standard conviction rule (where a registered citizen gets a 3+ year sentence within 5 years of registration), a treason conviction allows revocation **at any time** after registration. Thus, the 6-year lapse since 2020 does not protect him.</li>
                <li><strong>Conclusion:</strong> The state is legally justified in revoking Mark's citizenship.</li>
            </ul>

            <p><strong>2. Citizenship Status of the Abandoned Child (Foundling Rule):</strong></p>
            <p>The status of the child found in Marsabit county is governed by <span class="law-citation" onclick="jumpToRef('Constitution Article 14')">Article 14(4) of the Constitution (Kenyan Foundling Rule)</span>:</p>
            <ul class="custom-list">
                <li><strong>The Age & Identity Rule:</strong> A child who is found in Kenya who is, or appears to be, **less than eight years of age**, and whose nationality and parents are not known, is **presumed to be a citizen by birth**.</li>
                <li><strong>Application:</strong> The child is estimated to be 5 years old (less than 8) and is abandoned (parents and nationality unknown).</li>
                <li><strong>Conclusion:</strong> The child is legally presumed to be a Kenyan citizen by birth.</li>
            </ul>
        `
    },
    {
        id: "pred-8",
        title: "Partnership vs. Private Limited Company Comparison",
        predictionReasoning: "A fundamental distinction question often tested in the essay sections of EACQ 3214.",
        question: "Discuss FIVE (5) main legal differences between a Partnership (Cap 29) and a Private Limited Liability Company registered under the Companies Act 2015.",
        targetSection: "sec-4",
        answer: `
            <p>Partnerships and private companies have completely different legal architectures. The five main distinctions are:</p>
            <table class="comp-card" style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.92rem; text-align: left;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--card-border);">
                        <th style="padding: 8px;">Feature</th>
                        <th style="padding: 8px; color: var(--primary);">Partnership (Cap 29)</th>
                        <th style="padding: 8px; color: var(--secondary);">Private Company (Act 2015)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">1. Legal Personality</td>
                        <td style="padding: 8px;">No separate legal personality. The firm is merely a collective name for individual partners.</td>
                        <td style="padding: 8px;">Separate legal person distinct from shareholders (<span class="law-citation" onclick="jumpToCase('Salomon v. Salomon')">Salomon v. Salomon</span>).</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">2. Member Liability</td>
                        <td style="padding: 8px;">Unlimited liability. Partners' personal assets can be attached to settle firm debts.</td>
                        <td style="padding: 8px;">Limited liability. Shareholders only lose the unpaid amount on their shares.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">3. Ownership & Control</td>
                        <td style="padding: 8px;">Every partner has a default right to manage the business (<span class="law-citation" onclick="jumpToRef('Partnership Act Section 28')">Section 28</span>).</td>
                        <td style="padding: 8px;">Ownership (shareholders) is separated from management (directors).</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">4. Transfer of Interest</td>
                        <td style="padding: 8px;">A partner cannot transfer their share without the unanimous consent of all other partners.</td>
                        <td style="padding: 8px;">Shares are property and can be transferred, subject only to restrictions in the Articles.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--card-border);">
                        <td style="padding: 8px; font-weight: bold;">5. Winding Up & Death</td>
                        <td style="padding: 8px;">Wound up easily. The death or bankruptcy of a partner automatically dissolves the firm (<span class="law-citation" onclick="jumpToRef('Partnership Act Section 37')">Section 37</span>).</td>
                        <td style="padding: 8px;">Has perpetual succession. Death of a shareholder has no impact. Only wound up by formal legal processes.</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    {
        id: "pred-9",
        title: "Establishment of Domicile (Law of Domicile Act, Cap 37)",
        predictionReasoning: "Tests the statutory rules of Domicile under Cap 37, which is a major part of the Natural Persons syllabus.",
        question: "Define the term 'Domicile' under Cap 37 and explain the rules governing Domicile of Origin, Domicile of Dependence, and Domicile of Choice.",
        targetSection: "sec-2",
        answer: `
            <p><strong>A. Definition of Domicile:</strong></p>
            <p>Domicile is the country in which a person has their permanent home and to which, whenever they are absent, they have the intention of returning. Under the <span class="law-citation" onclick="jumpToRef('Law of Domicile Act (Cap 37)')">Law of Domicile Act (Cap 37)</span>, a person must have a domicile, can only have one domicile at a time, and cannot be without a domicile.</p>
            
            <p><strong>B. The Three Forms of Domicile:</strong></p>
            <ul class="custom-list">
                <li><strong>1. Domicile of Origin (Acquired at Birth):</strong>
                    <br>Acquired automatically at birth. A legitimate child takes the domicile of their father. An illegitimate child takes the domicile of their mother (<span class="law-citation" onclick="jumpToRef('Cap 37 Section 3')">Section 3</span>). A foundling child takes the domicile of the country where they are found (<span class="law-citation" onclick="jumpToRef('Cap 37 Section 4')">Section 4</span>).
                </li>
                <li><strong>2. Domicile of Dependence (Dependent Status):</strong>
                    <br>Changes automatically with the domicile of the person on whom the dependent relies.
                    <br>- Minors' domicile changes with their father's.
                    <br>- An adopted child takes the adopter's domicile (<span class="law-citation" onclick="jumpToRef('Cap 37 Section 6')">Section 6</span>).
                    <br>- A married woman automatically takes her husband's domicile upon marriage (<span class="law-citation" onclick="jumpToRef('Cap 37 Section 7')">Section 7</span>).
                </li>
                <li><strong>3. Domicile of Choice (Acquired by Volition):</strong>
                    <br>Acquired by a person of full age (18+) who voluntarily moves to another country with the clear, settled intention of making it their permanent home. Requires both physical residence (<em>factum</em>) and intent to reside permanently (<em>animus manendi</em>).
                </li>
            </ul>
        `
    },
    {
        id: "pred-10",
        title: "The Foss v. Harbottle Rule & Minority Protection",
        predictionReasoning: "A crucial company law concept governing who is the proper plaintiff to sue for wrongs done to a company.",
        question: "State the rule in Foss v. Harbottle [1843] and explain three exceptions where minority shareholders can bring an action in court for a wrong done to the company. Support with case law.",
        targetSection: "sec-9",
        answer: `
            <p><strong>A. The Rule in Foss v. Harbottle:</strong></p>
            <p>The rule established in <span class="law-citation" onclick="jumpToCase('Foss v. Harbottle')">Foss v. Harbottle (1843)</span> states that when a wrong is done to a company, the company is the **proper plaintiff** to sue. Individual shareholders cannot bring an action because the company is a separate legal person distinct from its members. Decisions to sue must be made by the majority of shareholders.</p>
            
            <p><strong>B. Exceptions to the Rule (Where Minority Can Sue):</strong></p>
            <p>To prevent the majority from abusing their power, courts allow minority shareholders to sue (via a derivative action) in the following exceptions:</p>
            <ol class="sub-list" style="margin-left: 20px;">
                <li><strong>1. Ultra Vires or Illegal Acts:</strong>
                    <br>If the company performs an action that is ultra vires its objects or illegal. The majority cannot ratify an illegal act.
                    <br><em>Legal Precedent:</em> In <span class="law-citation" onclick="jumpToCase('Simpson v Westminster Palace Hotel Co')">Simpson v Westminster Palace Hotel Co (1860)</span>, the court allowed a minority action to prevent an ultra vires hotel lease.
                </li>
                <li><strong>2. Fraud on the Minority:</strong>
                    <br>When the directors or majority shareholders use their voting control to expropriate the company's property or transfer it to themselves, leaving the minority helpless.
                    <br><em>Legal Precedent:</em> In <span class="law-citation" onclick="jumpToCase('Cook v. Deeks')">Cook v. Deeks (1916)</span>, directors took a railway construction contract in their own names instead of the company's and used their majority votes to ratify the transaction. The court allowed the minority action and ordered the directors to hold the contract profits in trust for the company.
                </li>
                <li><strong>3. Transaction Requiring a Special Majority:</strong>
                    <br>If the company acts on an ordinary resolution for a matter that legally requires a special resolution (75% majority), any member can sue to insist on the correct procedure.
                    <br><em>Legal Precedent:</em> In <span class="law-citation" onclick="jumpToCase('Edwards v. Halliwell')">Edwards v. Halliwell (1950)</span>, a trade union's rules required a 2/3 majority to increase member fees. The union tried to increase it by ordinary resolution. The court allowed a minority member's suit to declare the increase void.
                </li>
            </ol>
        `
    },
    {
        id: "pred-11",
        title: "Directors' Duties (Fiduciary and Care/Skill Rules)",
        predictionReasoning: "Duties of directors under common law and Sections 140-145 of the Companies Act 2015 are heavily tested.",
        question: "Discuss the fiduciary duties and duty of care, skill, and diligence owed by directors to a company. Cite relevant cases.",
        targetSection: "sec-14",
        answer: `
            <p>Directors owe crucial common law and statutory duties (codified under Sections 140-145 of the Companies Act 2015) to the company:</p>
            <ul class="custom-list">
                <li><strong>1. Fiduciary Duty of Good Faith (Section 140):</strong>
                    <br>Directors must act honestly and in good faith in what they consider to be the best interests of the company as a whole.
                </li>
                <li><strong>2. Duty to Avoid Conflicts of Interest (Section 143):</strong>
                    <br>A director must not place themselves in a position where their personal interests conflict with their duties to the company. Any secret profits made from their office must be surrendered.
                    <br><em>Leading Case:</em> In <span class="law-citation" onclick="jumpToCase('Aberdeen Railway Co v Blaikie Bros')">Aberdeen Railway Co v Blaikie Bros (1854)</span>, a company director was also a partner in a firm supplying chair castings. The court declared the supply contract voidable because of the conflict of interest.
                </li>
                <li><strong>3. Duty of Skill, Care, and Diligence (Section 145):</strong>
                    <br>Directors must exhibit the care, skill, and diligence that would be exercised by a reasonably diligent person with both:
                    <br>- The general knowledge, skill, and experience reasonably expected of someone in their position (objective test).
                    <br>- The actual knowledge, skill, and experience that director possesses (subjective test).
                    <br><em>Leading Case:</em> In <span class="law-citation" onclick="jumpToCase('Re City Equitable Fire Insurance Co')">Re City Equitable Fire Insurance Co (1925)</span>, Justice Romer established that a director is not expected to exhibit a greater degree of skill than may reasonably be expected from a person of his knowledge and experience, and is not bound to give continuous attention to the company's affairs.
                </li>
            </ul>
        `
    },
    {
        id: "pred-12",
        title: "Societies Legal Status & Member Liability (Cap 108)",
        predictionReasoning: "Tests Cap 108, specifically contrasting the lack of corporate personality of a society with an incorporated company.",
        question: "Ten members form 'Skyline Welfare Society' registered under the Societies Act (Cap 108). They purchase building materials for KES 500,000 on credit from a supplier, but the society defaults. Advise the members on their legal liability, contrasting this with an incorporated company.",
        targetSection: "sec-5",
        answer: `
            <p><strong>Advice to the Skyline Welfare Society Members:</strong></p>
            <p>The members of the society are **personally, jointly, and severally liable** to pay the KES 500,000 debt to the supplier. They cannot hide behind a 'corporate shield' for the following reasons:</p>
            <ul class="custom-list">
                <li><strong>Lack of Corporate Personality:</strong> Registration under the Societies Act (Cap 108) does not confer separate legal personality. A society is an unincorporated association—a group of individuals rather than a separate legal person.</li>
                <li><strong>Joint and Several Liability:</strong> Because a society has no legal existence separate from its members, the contracts signed by its officers are considered contracts of the individual members. Creditors can sue any individual member or all of them together to recover the full debt.</li>
                <li><strong>Property Ownership:</strong> The society cannot own property in its name; assets must be held in the names of trustees.</li>
            </ul>
            <p><strong>Contrast with an Incorporated Company:</strong></p>
            <p>If they had incorporated as a private limited company (e.g. 'Skyline Welfare Ltd') under the Companies Act 2015:</p>
            <ul class="custom-list">
                <li><strong>Separate Entity:</strong> The company would be the contract party, and the debt would be the company's debt alone.</li>
                <li><strong>Limited Liability:</strong> The shareholders' liability would be limited to any unpaid amount on their shares. If their shares were fully paid, their liability would be **zero**, and the supplier could not touch their personal assets (<span class="law-citation" onclick="jumpToCase('Salomon v. Salomon')">Salomon v. Salomon</span>).</li>
            </ul>
        `
    }
];
