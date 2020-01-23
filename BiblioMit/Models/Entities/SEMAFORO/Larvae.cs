﻿using System;
using System.Collections.Generic;

namespace BiblioMit.Models
{
    public class Larvae
    {
        public int Id { get; set; }
        public int CentreId { get; set; }
        public virtual Centre Centre { get; set; }
        public DateTime Date { get; set; }
        public ICollection<Larva> Larva { get; set; }
    }
}
