export interface ScamPageData {
  slug: string;
  scamType: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroHighlight: string;
  contentTitle: string;
  contentHighlight: string;
  contentParagraphs: string[];
  /** Approved "Warning signs" text from the Common Scams page (Part 2), shown after "Warning signs:". */
  warningSigns: string;
  iconPath: string;
}

export const allScams: ScamPageData[] = [
  {
    slug: "forex",
    scamType: "Forex",
    seoTitle: "Forex Scams: Investigation and Complaints, ScamHelp",
    seoDescription: "Lost money to a forex trading scam? ScamHelp investigates fraudulent brokers, traces your payments and prepares complaints for your bank. Free case assessment.",
    heroTitle: "Get Help with Your",
    heroHighlight: "Forex Scam",
    contentTitle: "Forex",
    contentHighlight: "scams",
    contentParagraphs: [
      "The forex market (FX) is the world's largest trading market. Nearly $5 trillion are traded daily. The market opens 24 hours a day. When trading closes in New York it starts again in Tokyo and Hong Kong. Since there are constant price fluctuations, this market can make institutions, companies and individuals a lot of money.",
      "Forex fraud is a growing problem and there is no foolproof way to avoid it. People under 25 are falling in droves due to the lavish payouts promised. Until recently, older people (those over 50 and in retirement) were considered to be the most vulnerable target. All that, is apparently a trend in the past. Those who currently make up the over 55 age group category have grown somewhat immune to the tricks of the online scammers, the young adult category has become the preferred target now.",
    ],
    warningSigns: `the broker is not registered with a financial regulator in your country; you are promised fixed or guaranteed returns; an "account manager" pressures you to deposit more; withdrawals are refused unless you pay fees or taxes first.`,
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    slug: "binary-option",
    scamType: "Binary Option",
    seoTitle: "Binary Option Scams: Investigation and Complaints, ScamHelp",
    seoDescription: "Lost money on a binary options platform? ScamHelp investigates the fraud, traces your payments and prepares complaints for your bank. Free case assessment.",
    heroTitle: "Get Help with Your",
    heroHighlight: "Binary Option Scam",
    contentTitle: "Binary option",
    contentHighlight: "scams",
    contentParagraphs: [
      "Scams are extremely common in the field of binary options. When new financial instruments or forms of trading emerge, a whole range of businesses tend to get involved and some of those product providers are more trustworthy than others. This is certainly true of binary options, these platforms tend to operate under the radar.",
      "A binary option is a type of options contract where the payout depends entirely on the outcome of a yes/no proposition, typically related to the price of a particular asset such as a stock or a commodity. With binary options you don't actually buy stock or commodities you just bet on its price within a certain time period. Some binary options are listed on registered exchanges or traded on a designated contract market and are subject to oversight by U.S. regulators such as the Commodity Futures Trading Commission (CFTC), however a large part of the binary options market operates through websites that don't comply with U.S. regulations or any Financial Regulatory Authorities.",
      "In the EU, selling binary options to retail clients has been prohibited since 2018, so a platform offering them to EU consumers is a warning sign in itself.",
    ],
    warningSigns: "the platform is based offshore or names no regulator; trades always seem to lose at the last moment; bonuses come with conditions that block withdrawals; you cannot reach anyone once you ask for your money back.",
    iconPath: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    slug: "cryptocurrency",
    scamType: "Cryptocurrency",
    seoTitle: "Cryptocurrency Scams: Investigation and Complaints, ScamHelp",
    seoDescription: "Victim of a cryptocurrency scam? ScamHelp traces crypto transactions, identifies the exchanges involved and prepares complaints. Free case assessment.",
    heroTitle: "Get Help with Your",
    heroHighlight: "Cryptocurrency Scam",
    contentTitle: "Cryptocurrency",
    contentHighlight: "scams",
    contentParagraphs: [
      "Cryptocurrency market significantly grew within past 10 years and there is a high probability of making a big profit investing in virtual money. Scams and fraudulent schemes are everywhere online so the prospect of making 'quick money' can blind most people even though there is much higher risk involved into crypto transactions.",
      "Complex blockchain technology crypto companies are using is considered safe, however scammers find ways to take advantage of naive investors breaking into users' digital wallets. Because many victims first buy crypto by card or bank transfer, the payment trail often starts at a regulated bank or exchange, which is why records of every transaction matter. Many fraud victims have rights to dispute or complain; we assess whether they apply to your case.",
    ],
    warningSigns: `unsolicited contact on social media or messaging apps; promised fixed or guaranteed returns; pressure to deposit more to "unlock" a withdrawal; instructions to install remote-access software; a platform not listed with any financial regulator.`,
    iconPath: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
  },
  {
    slug: "online-casino",
    scamType: "Online Casino",
    seoTitle: "Online Casino Scams: Investigation and Complaints, ScamHelp",
    seoDescription: "Scammed by an unlicensed online casino? ScamHelp investigates your payments, identifies the institutions involved and prepares complaints. Free case assessment.",
    heroTitle: "Get Help with Your",
    heroHighlight: "Online Casino Scam",
    contentTitle: "Online casino",
    contentHighlight: "scams",
    contentParagraphs: [
      "The global online gambling market today is worth around 60 billion USD and keeps growing exponentially. Being a part of an online gambling community is quite risky by itself since virtual poker, casinos and sports betting websites use various fraudulent moves to decrease your chances to win. Online casinos, slot machines and so on are not designed to help you earning money, they do care only about generating as much revenue as possible on their end. Even though a large number of casinos are fully licensed and legitimate, there are a lot of shady players who ridiculously over-charge for the withdrawal or freeze players' accounts once they try to pull their money out. There are multiple ways for cybercriminals and fraudsters to game the system from using bonus abuse techniques to steal your credit card details.",
      "Before playing, check that the operator holds a licence from a recognised gambling regulator. ScamHelp does not assist with recovering ordinary gambling losses at licensed operators.",
    ],
    warningSigns: "no licence number, or one you cannot verify with the regulator; withdrawals delayed with repeated new document requests; bonus terms that make withdrawals impossible; customer support that disappears after a large win.",
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    slug: "fake-exchange",
    scamType: "Fake Exchange",
    seoTitle: "Fake Exchange Scams: Investigation and Complaints, ScamHelp",
    seoDescription: "Lost funds to a fake crypto exchange? ScamHelp traces your transactions, identifies the exchanges involved and prepares complaints. Free case assessment.",
    heroTitle: "Get Help with Your",
    heroHighlight: "Fake Exchange Scam",
    contentTitle: "Fake exchange",
    contentHighlight: "scams",
    contentParagraphs: [
      "The cryptocurrency market has seen tremendous growth over the past decade, attracting investors with the potential for significant profits. Unfortunately, this rapid rise has also led to an increase in scams and fraudulent schemes, especially through fake cryptocurrency exchanges. These scams prey on the desire to make quick profits, often blinding people to the high risks involved.",
      "Fake exchanges imitate real platforms, tricking investors into trusting them. After funds are deposited, scammers can vanish, leaving wallets empty. Although blockchain is secure, scammers use clever tactics to exploit newcomers. Victims often fund these fake accounts by card or bank transfer, so the payment trail usually starts at a bank or card issuer. Many fraud victims have rights to dispute or complain; we assess whether they apply to your case.",
    ],
    warningSigns: `the exchange was recommended by someone you met online; the web address is slightly different from a known exchange; you must pay a "tax" or "verification fee" to withdraw; the app is not in the official app stores.`,
    iconPath: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    slug: "investment",
    scamType: "Investment",
    seoTitle: "Investment Scams: Investigation and Complaints, ScamHelp",
    seoDescription: "Victim of an investment scam? ScamHelp investigates fake investment platforms, traces your payments and prepares complaints for your bank. Free case assessment.",
    heroTitle: "Get Help with Your",
    heroHighlight: "Investment Scam",
    contentTitle: "Investment",
    contentHighlight: "scams",
    contentParagraphs: [
      `The global investment market has grown massively, attracting people seeking high returns. However, the promise of quick profits makes investment schemes risky, as many fraudulent "investment opportunities" are designed to deceive. Fake investment platforms often use unrealistic promises of high returns to lure in unsuspecting investors, only to disappear with their money. While some investment firms are legitimate, there are many scammers who charge excessive fees, delay withdrawals, or freeze accounts when investors try to cash out. Cybercriminals use various tactics, from manipulating returns to phishing for personal information, to exploit those looking to grow their wealth.`,
    ],
    warningSigns: "returns that are far above market rates; pressure to decide quickly; requests to keep the investment secret; a company you cannot find in an official register.",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];
