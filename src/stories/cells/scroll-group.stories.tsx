import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ScrollGroup from "../../feature/cells/scroll-group.component";

const meta = {
  title: "Cells/ScrollGroup",
  component: ScrollGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
      table: { defaultValue: { summary: "vertical" } },
    },
    theme: {
      options: ["light-theme", "dark-theme"],
      control: { type: "radio" },
      table: { defaultValue: { summary: "light-theme" } },
    },
  },
};
export default meta;

const Template = (args) => (
  <div
    className="scroll-groupp"
    style={{
      width: args.orientation === "horizontal" ? "400px" : "500px",
      height: "500px",
    }}
  >
    <ScrollGroup {...args}>
      <div
        style={{
          background: "rgb(44, 213, 201)",
          width: "auto",
          height: "auto",
        }}
      >
        {args.children}
      </div>
    </ScrollGroup>
  </div>
);

export const LightTheme: StoryObj = Template.bind({});
LightTheme.args = {
  orientation: "vertical",
  theme: "light-theme",
  children: (
    <>
      <h2>
        Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam
        pollicetur.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio,
        quo modo possit, si luxuriosus sit, finitas cupiditates habere. Hoc est
        non modo cor non habere, sed ne palatum quidem.
      </p>
      <h2>
        Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam
        pollicetur.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio,
        quo modo possit, si luxuriosus sit, finitas cupiditates habere. Hoc est
        non modo cor non habere, sed ne palatum quidem. Sic, et quidem
        diligentius saepiusque ista loquemur inter nos agemusque communiter.
        Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Quid
        igitur dubitamus in tota eius natura quaerere quid sit effectum? Duo
        Reges: constructio interrete.
      </p>
      <h3>
        Ut proverbia non nulla veriora sint quam vestraUt proverbia non nulla
        veriora sint quam vestrUt proverbia non nulla veriora sint quam vestrUt
        proverbia non nulla veriora sint quam vestrUt proverbia non nulla
        veriora sint quam vestrUt proverbia non nulla veriora sint quam vestr
        dogmata.
      </h3>
      <p>
        Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam
        philosophorum sit. Tria genera cupiditatum, naturales et necessariae,
        naturales et non necessariae, nec naturales nec necessariae. Sin aliud
        quid voles, postea. Consequatur summas voluptates non modo parvo, sed
        per me nihilo, si potest;
      </p>
      <p>
        Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum
        est, quod non intellegatur? Primum in nostrane potestate est, quid
        meminerimus? Eam tum adesse, cum dolor omnis absit; Quodsi ipsam
        honestatem undique pertectam atque absolutam. Aliam vero vim voluptatis
        esse, aliam nihil dolendi, nisi valde pertinax fueris, concedas necesse
        est. Nec enim, cum tua causa cui commodes, beneficium illud habendum
        est, sed faeneratio, nec gratia deberi videtur ei, qui sua causa
        commodaverit. Universa enim illorum ratione cum tota vestra confligendum
        puto. Sed residamus, inquit, si placet. Sed vobis voluptatum perceptarum
        recordatio vitam beatam facit, et quidem corpore perceptarum. Itaque
        primos congressus copulationesque et consuetudinum instituendarum
        voluntates fieri propter voluptatem; Ita enim se Athenis collocavit, ut
        sit paene unus ex Atticis, ut id etiam cognomen videatur habiturus.
        Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas
        proferebas.
      </p>
      <h2>An hoc usque quaque, aliter in vita?</h2>
      <ol>
        <li>
          Etenim nec iustitia nec amicitia esse omnino poterunt, nisi ipsae per
          se expetuntur.
        </li>
        <li>
          Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q.
        </li>
        <li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>
        <li>
          Itaque e contrario moderati aequabilesque habitus, affectiones ususque
          corporis apti esse ad naturam videntur.
        </li>
      </ol>
      <p>
        Utilitatis causa amicitia est quaesita. Qui autem de summo bono
        dissentit de tota philosophiae ratione dissentit. Quamquam non negatis
        nos intellegere quid sit voluptas, sed quid ille dicat. Sed emolumenta
        communia esse dicuntur, recte autem facta et peccata non habentur
        communia. Hoc positum in Phaedro a Platone probavit Epicurus sensitque
        in omni disputatione id fieri oportere. Potius inflammat, ut coercendi
        magis quam dedocendi esse videantur. Roges enim Aristonem, bonane ei
        videantur haec: vacuitas doloris, divitiae, valitudo; Totum autem id
        externum est, et quod externum, id in casu est. Non autem hoc: igitur ne
        illud quidem. Simul atque natum animal est, gaudet voluptate et eam
        appetit ut bonum, aspernatur dolorem ut malum. Quamquam tu hanc
        copiosiorem etiam soles dicere. Quid enim necesse est, tamquam
        meretricem in matronarum coetum, sic voluptatem in virtutum concilium
        adducere? Hoc positum in Phaedro a Platone probavit Epicurus sensitque
        in omni disputatione id fieri oportere. Videsne quam sit magna
        dissensio?
      </p>
      <h3>Claudii libidini, qui tum erat summo ne imperio, dederetur.</h3>
      <p>
        Eorum enim est haec querela, qui sibi cari sunt seseque diligunt. Cum
        audissem Antiochum, Brute, ut solebam, cum M. An obliviscimur,
        quantopere in audiendo in legendoque moveamur, cum pie, cum amice, cum
        magno animo aliquid factum cognoscimus? Qui igitur convenit ab alia
        voluptate dicere naturam proficisci, in alia summum bonum ponere? Magni
        enim aestimabat pecuniam non modo non contra leges, sed etiam legibus
        partam. Haec mirabilia videri intellego, sed cum certe superiora firma
        ac vera sint, his autem ea consentanea et consequentia, ne de horum
        quidem est veritate dubitandum. At, illa, ut vobis placet, partem
        quandam tuetur, reliquam deserit. Sed utrum hortandus es nobis, Luci,
        inquit, an etiam tua sponte propensus es? Sed est forma eius
        disciplinae, sicut fere ceterarum, triplex: una pars est naturae,
        disserendi altera, vivendi tertia. Nemo enim est, qui aliter dixerit
        quin omnium naturarum simile esset id, ad quod omnia referrentur, quod
        est ultimum rerum appetendarum. Quid est, quod ab ea absolvi et perfici
        debeat? Quod cum accidisset ut alter alterum necopinato videremus,
        surrexit statim. Tantum dico, magis fuisse vestrum agere Epicuri diem
        natalem, quam illius testamento cavere ut ageretur. Quod iam a me
        expectare noli. Quod totum contra est. Semper enim ita adsumit aliquid,
        ut ea, quae prima dederit, non deserat.
      </p>
      <h2>Sed nimis multa.</h2>
      <p>
        Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Negat
        enim summo bono afferre incrementum diem. Causa autem fuit huc veniendi
        ut quosdam hinc libros promerem. Deinde prima illa, quae in congressu
        solemus: Quid tu, inquit, huc? Minime vero probatur huic disciplinae, de
        qua loquor, aut iustitiam aut amicitiam propter utilitates adscisci aut
        probari. Nulla profecto est, quin suam vim retineat a primo ad extremum.
        Sed ad illum redeo. Quem quidem vos, cum improbis poenam proponitis,
        inpetibilem facitis, cum sapientem semper boni plus habere vultis,
        tolerabilem. Huic ego, si negaret quicquam interesse ad beate vivendum
        quali uteretur victu, concederem, laudarem etiam; Non igitur de improbo,
        sed de callido improbo quaerimus, qualis Q. His singulis copiose
        responderi solet, sed quae perspicua sunt longa esse non debent. Quae
        cum ita sint, effectum est nihil esse malum, quod turpe non sit.
      </p>
    </>
  ),
};

export const DarkTheme: StoryObj = Template.bind({});
DarkTheme.args = {
  orientation: "horizontal",
  theme: "dark-theme",
  children: (
    <div>
      {`12345678990000000000000000000000000hcdcdcbhbchfbhfbhfbcfhbcfbbcbcfchccbfbfbfbfbfch `.repeat(
        10
      )}
    </div>
  ),
};
