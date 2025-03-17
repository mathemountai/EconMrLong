const economists = [
    {
        name: 'Smith',
        clues: [
            'Known for pioneering work on capitalism and the "invisible hand."',
            'Argued that individuals acting in their self-interest unintentionally benefit society.',
            'Believed that free markets naturally regulate themselves through competition.',
            'The most famous book is "The Wealth of Nations" (1776), which is considered the foundation of modern economics.',
            'Also a moral philosopher and wrote "The Theory of Moral Sentiments" before his economic work.',
            'Influenced the creation of modern capitalism, including the economic systems of the United States and Great Britain.',
            'Advocated for limited government intervention in the economy.'
        ]
    },
    {
        name: 'Ricardo',
        clues: [
            'Best known for the theory of comparative advantage in international trade.',
            'Argued that trade between nations is beneficial if countries specialize in what they do best.',
            'One of the first to apply mathematical analysis to economic theory.',
            'The most important book is "On the Principles of Political Economy and Taxation" (1817), a cornerstone of classical economics.',
            'Introduced the concept of "rent," explaining how landowners benefit disproportionately from land ownership.',
            'Criticized the "Corn Laws" (agricultural tariffs) in Britain, advocating for free trade.',
            'Theories on labor and rent influenced later economists like Marx and Keynes.'
        ]
    },
    {
        name: 'Keynes',
        clues: [
            'Revolutionized economic thought with ideas on government intervention during recessions.',
            'Believed that government spending could help stimulate economic activity during periods of low demand.',
            'Argued that the economy could be unstable in the short run and required active policy intervention to maintain stability.',
            'The major book, "The General Theory of Employment, Interest, and Money" (1936), argued that demand, not supply, drives the economy.',
            'Played a major role in the creation of the Bretton Woods system, which established the International Monetary Fund (IMF) and the World Bank.',
            'Famously predicted that in the long run, we are all dead, implying that short-term instability was a serious concern for governments.',
            'Theories were instrumental in shaping modern macroeconomic policy, including policies of fiscal stimulus during recessions.'
        ]
    },
    {
        name: 'Friedman',
        clues: [
            'A major figure in the Chicago School of economics, advocating for free-market capitalism.',
            'Monetarist theories emphasized controlling the money supply to prevent inflation.',
            'Believed that government regulation distorts economic freedom and hampers growth.',
            'The book, "Capitalism and Freedom" (1962), is a powerful defense of capitalism and minimal government intervention.',
            'Famously said, "Inflation is always and everywhere a monetary phenomenon."',
            'Work laid the groundwork for the deregulation movement of the 1980s and 1990s.',
            'Advocated for school choice, proposing the use of school vouchers to increase competition in education.'
        ]
    },
    {
        name: 'Hayek',
        clues: [
            'A leading figure in the Austrian School of Economics, known for defending classical liberalism and market economies.',
            'Argued that the economy is too complex for central planning and that free markets are the best way to allocate resources.',
            'Was a critic of socialism and a proponent of individual freedoms, believing that liberty and free markets are essential for prosperity.',
            'The influential book, "The Road to Serfdom" (1944), warned of the dangers of central planning and government control over the economy.',
            'Contributed to the theory of business cycles, suggesting that economic booms and busts are caused by excessive government intervention.',
            'Shared the Nobel Prize in Economic Sciences with Gunnar Myrdal in 1974.',
            'Argued that economic freedom was necessary for political freedom, influencing leaders like Margaret Thatcher and Ronald Reagan.'
        ]
    },
    {
        name: 'Lucas',
        clues: [
            'A leading figure in modern macroeconomics, best known for developing the theory of rational expectations.',
            'Argued that economic agents form expectations about the future, affecting their current economic decisions.',
            'Developed the "Lucas Critique," arguing that macroeconomic policy cannot be reliably tested using models that do not account for changes in expectations.',
            'The book, "Studies in Business-Cycle Theory" (1981), challenged Keynesian economic models.',
            'Work reshaped how economists think about business cycles, inflation, and monetary policy.',
            'Awarded the Nobel Prize in Economics in 1995 for contributions to macroeconomic theory.',
            'Laid the foundation for New Classical Economics, which emphasizes the role of rational agents in economic decision-making.'
        ]
    },
    {
        name: 'Akerlof',
        clues: [
            'Best known for work on asymmetric information and the concept of "market for lemons."',
            'Demonstrated how sellers with more information than buyers can drive low-quality goods out of the market.',
            'Developed the idea of "moral hazard," where one party to a transaction may take risks because they do not bear the full cost of those risks.',
            'The groundbreaking paper, "The Market for Lemons" (1970), showed how asymmetric information can lead to market failure.',
            'Work on information asymmetry influenced the creation of new regulatory policies in industries such as insurance and banking.',
            'Also contributed to the study of social norms and their impact on economic behavior.',
            'Won the Nobel Prize in Economics in 2001 for analysis of markets with asymmetric information.'
        ]
    },
    {
        name: 'Kahneman',
        clues: [
            'Psychologist who won the Nobel Prize in Economics for work on behavioral economics.',
            'Research shows how people rely on intuition and heuristics, which often lead to systematic biases.',
            'Co-developed prospect theory, describing how people value potential losses and gains in an asymmetric manner.',
            'The book, "Thinking, Fast and Slow" (2011), explains the two systems of thought: fast, intuitive thinking and slow, deliberate thinking.',
            'Work challenged traditional economic theory by showing that people do not always act rationally.',
            'Also known for the "availability heuristic," explaining how people overestimate the likelihood of events based on how easily examples come to mind.',
            'Won the Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel in 2002, the first psychologist to win the prize.'
        ]
    },
    {
        name: 'Ostrom',
        clues: [
            'Political economist known for work on governance of common-pool resources.',
            'Showed that local communities can manage resources without central control or privatization.',
            'Identified eight design principles for managing common resources, including clear boundaries, proportional equivalence between benefits and costs, and collective choice arrangements.',
            'The influential book, "Governing the Commons" (1990), demonstrated how decentralized decision-making can prevent overuse of resources.',
            'Received the Nobel Prize in Economics in 2009 for groundbreaking work on governance of common-pool resources.',
            'First woman to win the Nobel Prize in Economics.',
            'Work has had significant influence on fields such as environmental economics, political science, and institutional economics.'
        ]
    }
];