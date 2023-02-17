import { Service } from "../interfaces"
import {
    ComputerDesktopIcon,
    LightBulbIcon,
    Cog8ToothIcon,
    CloudIcon,
    PresentationChartLineIcon,
    BriefcaseIcon
} from "@heroicons/react/24/solid"

export const itServices: Service[] = [
    {
        title: "Skreddersydde løsninger",
        description:
            "Vi jobber tett med våre kunder for å forstå deres utfordringer og utvikler skreddersydde løsninger som gir konkurransefortrinn",
        icon: <ComputerDesktopIcon className="w-8 h-8 text-white" />
    },
    {
        title: "Datainnsikt",
        description:
            "Automatiser arbeidsoppgaver som er tidkrevende og repetitive. Vi skaper integrasjoner mellom systemer som lar deg fokusere på de tingene som er viktige for deg",
        icon: <LightBulbIcon className="w-8 h-8 text-white" />
    },
    {
        title: "Automatisering",
        description:
            "Få innsikt i handlingsmønsteret til deres kunder. Hvilke kundegrupper lønner det seg å markedsføre mot? Hvilke av produktene deres er det kundene vil ha? Økt datainnsikt gir bedre beslutninger og effektivitet",
        icon: <Cog8ToothIcon className="w-8 h-8 text-white" />
    },
    {
        title: "Sky-tjenester",
        description:
            "Skybaserte IT-løsninger gir kundene våre fleksibilitet, sikkerhet og tilgjengelighet. Ved å flytte til skyen, kan kundene våre enkelt tilpasse og skalere løsningene sine, samtidig som de reduserer kostnader",
        icon: <CloudIcon className="w-8 h-8 text-white" />
    }
]
export const strategyServices: Service[] = [
    {
        title: "Markedsavklaring",
        description:
            "Vi jobber tett med våre kunder for å forstå deres utfordringer og utvikler skreddersydde løsninger som gir konkurransefortrinn",
        icon: <PresentationChartLineIcon className="w-8 h-8 text-white" />
    },
    {
        title: "Markedsundersøkelse",
        description:
            "Automatiser arbeidsoppgaver som er tidkrevende og repetitive. Vi skaper integrasjoner mellom systemer som lar deg fokusere på de tingene som er viktige for deg",
        icon: <CloudIcon className="w-8 h-8 text-white" />
    },
    {
        title: "Foretningsutvikling",
        description:
            "Få innsikt i handlingsmønsteret til deres kunder. Hvilke kundegrupper lønner det seg å markedsføre mot? Hvilke av produktene deres er det kundene vil ha? Økt datainnsikt gir bedre beslutninger og effektivitet",
        icon: <BriefcaseIcon className="w-8 h-8 text-white" />
    },
    {
        title: "Strategisk analyse",
        description:
            "Skybaserte IT-løsninger gir kundene våre fleksibilitet, sikkerhet og tilgjengelighet. Ved å flytte til skyen, kan kundene våre enkelt tilpasse og skalere løsningene sine, samtidig som de reduserer kostnader",
        icon: <BriefcaseIcon className="w-8 h-8 text-white" />
    }
]
